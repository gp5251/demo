const fs = require("fs")

fs.stat(__filename,  (err, stats) =>  {
    if (err)  {
        console.log(err)
    }  else  {
        // console.log(stats)
        /*
            Stats {
                dev: 3036489160,
                mode: 33206,
                nlink: 1,
                uid: 0,
                gid: 0,
                rdev: 0,
                blksize: undefined,
                ino: 8162774324736964,
                size: 163,   //    获取文件的大小；
                blocks: undefined,
                atimeMs: 1535789999994.595,
                mtimeMs: 1535790087157.6729,
                ctimeMs: 1535790087157.6729,
                birthtimeMs: 1535789999994.595,    
                atime: 2018-09-01T08:19:59.995Z,    //    获取文件最后一次访问的时间；
                mtime: 2018-09-01T08:21:27.158Z,    //    文件最后一次修改时间；
                ctime: 2018-09-01T08:21:27.158Z,    //    状态发生变化的时间
                birthtime: 2018-09-01T08:19:59.995Z  //    文件创建的时间；
                

        */

        console.log(stats.size)
        console.log(stats.birthtime.toLocaleString())
        console.log(stats.isFile())
        console.log(stats.isDirectory())
    }
})