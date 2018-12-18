const cheerio = require("cheerio")
const request   = require("superagent")
const http = require("http")
const fs = require("fs")

const ws = fs.createWriteStream("./dist/2.json")
const ws2 = fs.createWriteStream("./dist/3.html")
ws2.setDefaultEncoding("utf-8")

let projectListUrl = "http://git.daojia-inc.com/groups/fe"
let projectUrl = "http://git.daojia-inc.com/fe/"
// let index = 1
let totalPage = 0

let allProject = []

const cookie1 = "dj_cookieid=15435568261503225091667; gr_user_id=8c6225be-5441-434b-a95f-4bd3f6a7b626; grwng_uid=c7bea94a-a12f-4f6b-a28d-0c4df9b1bb39; bi_hmsr=none; dj_hmsr=none; dj_hmmd=none; dj_hmpl=none; dj_hmkw=; UM_distinctid=16777f9809661b-004c1c71c86bd7-6313363-100200-16777f98097a02; _djinpassuser=372349773807619; _djinpasstkt='byK8cFbqwaGqrcop0AST1R3+PEr6dfEp15SuLhfXUUIqeco3TYVOS2lTF78bxeA8zkwn61RQTuAu6lNEi30QIA=='; acl_username=qiaojf; acl_version=83215448430689938141; avl_token=0ebadcde5316e481f36c43064c543afba4d24388fa0f917ae687e1e6dfc30011; acl_userId=566; acl_userRole=%2C; inpass=NJ7sg9y3zs4dj007; remember_user_token=W1sxMDM5XSwiJDJhJDEwJGhhNU9hTnBPUUJPMGFBV1hacFNHWmUiLCIyMDE4LTEyLTE1VDA1OjQxOjM1LjYwNloiXQ%3D%3D--dcfb6f18045516df8fa3c1f764ce8cf8ed3d72bc; _gitlab_session=45ba0f77ca64a489b3879a2aac7ff474; collapsed_nav=true"

async function main () {

    let initData = await request.get(projectListUrl).set("Cookie", cookie1)
    const $ = cheerio.load(initData.text)
    totalPage = $(".last").html().match(/page=(\d+)/)[1]

    let promiseArr = []

    for (let index = 1; index <= totalPage; index ++) {
        projectListUrl = "http://git.daojia-inc.com/groups/fe?page=" + index
        console.log(projectListUrl)
        let data = await request.get(projectListUrl).set("Cookie", cookie1)
        let $ = cheerio.load(data.text)

        $(".project-name").each ((index, elem) => {
            allProject.push($(elem).html().replace(/\s|\n/g, ""))
        })
        
    }

    ws.end(JSON.stringify(allProject))

    console.log("allProject " + allProject.length)

    for (let i = 0; i < allProject.length; i++){
        projectUrl = "http://git.daojia-inc.com/fe/" + allProject[i]
        let data
        try {
            data = await request.get(projectUrl).set("Cookie", cookie1)
        } catch (e) {
            ws2.write("project name : ---------------------" + allProject[i] + "   不存在")
            continue
        }
        let $ = cheerio.load(data.text, { decodeEntities: false })
       
        console.log("project name : ---" + allProject[i])
        // console.log(projectUrl)
        ws2.write("<h1>project name : ---------------------------------------" + allProject[i] + "-----------------------------------------</h1>")
        
        // console.log($(".file-content").html())
        if ($(".commit-author-name").html()) {
            ws2.write("<h2>last commit  " + $(".time_ago").attr("datetime") + "  by  " + $(".commit-author-name").html().replace(/\s|\n/g, "") + "</h2>")
            if ( $(".file-content").html() ) {
                ws2.write($(".file-content").html())
            } else {
                ws2.write("<h2>------------------------------没有 readme 文件-------------------------</h2>")
            }
        } else {
            ws2.write("<h2>--------------------------空项目----------------------------</h2>")
        }
        ws2.write("<br/>--------------------------------------------------------------------------------------------------------")
    }

    ws2.end()
    
}

main ()