const request = require('superagent')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')
const request2 = require("request")

let baseUrl = 'http://www.99mm.me'
let pageUrl = '/xinggan/mm_2_1.html'
let detailUrl = '/3060.html'

let totalPage = process.argv[2] || 1
let curPage = 1

let pageArr = []
let detailArr = []
let allPage = []
let allPic = []

const baseDirName = path.join(__dirname, "../../../../../imgs")


for (let i = 1; i <= totalPage; i++) {
  let pro = new Promise(resolve => {
    let url = `${baseUrl}/xinggan/mm_2_${i}.html`
    console.log(`url ---------- ${url}`)
    request.get(url).then(data => {
      resolve(data.text)
    }).catch(err => {
        console.log(err)
    })
  })

  pageArr.push(pro)
}

Promise.all(pageArr).then(data => {
  let $ = cheerio.load(data[0])
  // console.log(data[0])
  console.log($('#piclist li').length)
  let html = $('#piclist li')
  for (let i = 0; i < html.length; i++) {
    // console.log(html.eq(i).find("dt a").attr("href"))
  }
  for (let dd of data) {
    let $ = cheerio.load(dd)
    // console.log(data[0])
    // console.log($("#piclist li").length)
    let html = $('#piclist li')
    for (let i = 0; i < html.length; i++) {
      let page = html
        .eq(i)
        .find('dt a')
        .attr('href')
      // console.log(page)
      allPage.push(encodeURIComponent(baseUrl + page))
    }
  }

  // console.log(allPage.sort())
  allPage = allPage.toString()
  allPage = allPage.split(',').map(item => {
    return `'${item}'`
  })
//   fs.writeFileSync(path.join(__dirname, '../json/json.js'), `export default [${allPage}]`)
  getPic()
})

function getPic () {
  for (let i = 0; i < allPage.length; i++) {
    let pro = new Promise(resolve => {
      console.log(decodeURIComponent(allPage[i]))
      let url = decodeURIComponent(allPage[i])

      request
        .get(url.slice(1, -1))
        .then(data => {
          resolve(data.text)
        })
        .catch(err => {
          console.log(err)
        })
    }).catch(err => {
      console.log(err)
    })
    detailArr.push(pro)
  }
  console.log(detailArr.length)

  Promise.all(detailArr)
    .then(data => {
      for (let detail of data) {
        const $ = cheerio.load(detail)
        let picArr = $('script')
          .eq($('script').length - 2)
          .html()
        let picBase = $('#picbox img').attr('src')
        picBase = picBase.slice(0, picBase.lastIndexOf('/') + 1)
        const reg = /(\[.*\])/
        if (reg.test(picArr)) {
          picArr = eval(RegExp.$1)[6]
            .split(',')
            .map((item, index) => {
              return `${picBase}${index + 1}-${item}.jpg`
            })

            allPic.push(picArr)

          console.log(allPic)
          console.log(allPic.length)

        }
      }

      download()
    
    })
    .catch(err => {
      console.log(err)
    })
}

// request
//   .get('http://fj.kanmengmei.com/2018/2958/43-pw.jpg')
//   .set('Referer', 'http://aa.bbb.cccc.www.99mm.me/xinggan')
//   .then(res => {
//     // const $ = cheerio.load(res.text);
//     // let arr = $("script").eq($("script").length - 2).html()
//     // const reg = /(\[.*\])/
//     // reg.test(arr)
//     // arr = eval(RegExp.$1)[6].split(",").map((item, index) => {
//     //     return `${index + 1}-${item}.jpg`
//     // })

//     // console.log(arr)
//     console.log(res.text)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// request
//   .get('http://fj.kanmengmei.com/2018/2958/43-pw.jpg')
//   .set({
//       'Referer': 'http://aa.bbb.cccc.www.99mm.me/xinggan',
//       "Content-Type": "image/jpeg"
//     }).pipe(fs.createWriteStream("1.jpg"))



function download () {
    const picPro = []

    for (let i = 0; i < allPic.length; i++) {
        let pro = new Promise(resolve => {
            let name = allPic[i][0]
            name = name.slice(0, name.lastIndexOf("/")).slice(-9).replace("/", "-")
            console.log("name: " + name)

            let dirName = path.join(baseDirName, name)

            if (fs.existsSync(dirName)) {
                return
            }
            fs.mkdir(dirName, function () {

                for (let j = 0; j < allPic[i].length; j++) {
                    let url = allPic[i][j]
                    let filename = path.join(dirName, url.slice(url.lastIndexOf("/")))
                    console.log(filename)
                    request
                    .get(url)
                    .set({
                        'Referer': 'http://aa.bbb.cccc.www.99mm.me/xinggan',
                        "Content-Type": "image/jpeg"
                        }).pipe(fs.createWriteStream(filename))
                        
                }

                resolve()

            })

            
            
            
        })

        picPro.push(pro)
    }

    Promise.all(picPro).then(data => {
        console.log("success")
    }).catch(err => {
        console.log(err)
    })
}

