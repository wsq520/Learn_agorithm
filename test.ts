function removeSubfolders(folder: string[]): string[] {
    const res: string[] = []
    // 字符串升序
    folder.sort()
    res.push(folder[0])

    for (let i = 1; i < folder.length; i++) {
        const pre = res[res.length - 1]
        if (folder[i].startsWith(pre) && pre.length < folder[i].length) {
            const subStr = folder[i].slice(pre.length)
            // 如果后面还包含 / 说明还有一个层级 那么就最直接忽略 因为它肯定是pre的子目录；
            // 如果后面没有 / 说明当前目录只是前缀和pre一样 
            // 但是最后一级目录名字和pre最后一级目录名字不同 不能被删除 比如"/a/b/c", "/a/b/ca"，c和ca不同
            if (!subStr.includes('/')) {
                res.push(folder[i])
            }
            continue
        } else {
            res.push(folder[i])
        }
    }

    return res
};

removeSubfolders(["/a/b/c", "/a/b/ca", "/a/b/d"])

export { }