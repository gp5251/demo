const charset = require('superagent-charset')
const superagent = charset(require('superagent')) // 代理访问

const cheerio = require('cheerio') // nodejs版本jQuery
const async = require('async')
const fs = require('fs')
const url = require('url')
const request = require('request')
const iconv = require('iconv-lite')

const promiseArr = []
const allProjects = []

superagent.get('http://git.daojia-inc.com/groups/fe').end(function (err, res) {
    if (err) return console.log(err)
    let $ = cheerio.load(res.text)
    let pageNum = $('.last').children().eq(0).attr('href').match(/page=(\d+)/)[1]  // 获取总页数
    let projectsArr = []
    for (let i = 1; i <= pageNum; i++) {
        promiseArr.push(new Promise(function (resolve, reject) {
                superagent.get('http://git.daojia-inc.com/groups/fe?page=' + i).end(function (err, res) {
                    if (err) return console.log(err)
                    let $ = cheerio.load(res.text)
                    $('.project-name').each(function (index, item) {
                        projectsArr.push($(item).html().replace(/\s|\n/g, ''))
                    })
                    resolve(projectsArr)
                })
            })
        )
    }
    Promise.all(promiseArr).then(res => {
        res.forEach(arr => {
            allProjects.push(...arr)
        })
        // 所有项目 (未排序)
        // console.log(JSON.stringify(allProjects))

        for (let i = 0; i < allProjects.length; i++) {
            superagent.get('http://git.daojia-inc.com/fe/' + allProjects[i]).charset('utf-8').end(function (err, res) {
                if (err) return console.log(err)
                let $ = cheerio.load(res.text, { decodeEntities: false })
                // const content = $('.file-content').html()
                console.log('=====================项目' + allProjects[i] + '========================')
                // console.log(content)
            })
        }
    })
})
