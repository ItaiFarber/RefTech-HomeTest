const table = document.getElementById('article_table')


function initTable(){
    var headRow = document.createElement("tr")

    var IndexTD = document.createElement("td")
    IndexTD.appendChild(document.createTextNode("Index"))

    var TimestampTD = document.createElement("td")
    TimestampTD.appendChild(document.createTextNode("Timestamp"))

    var TitleTD = document.createElement("td")
    TitleTD.appendChild(document.createTextNode("Title"))

    var DescriptionTD = document.createElement("td")
    DescriptionTD.appendChild(document.createTextNode("Description"))

    var ImageSourceTD = document.createElement("td")
    ImageSourceTD.appendChild(document.createTextNode("Image Source"))

    headRow.appendChild(IndexTD)
    headRow.appendChild(TimestampTD)
    headRow.appendChild(TitleTD)
    headRow.appendChild(DescriptionTD)
    headRow.appendChild(ImageSourceTD)

    const thead = document.createElement("thead")
    thead.appendChild(headRow)
    table.appendChild(thead)

}

initTable()

function fillTableFromFile(){
    fetch('./articlesFile.txt')
    .then(res => res.text())
    .then(data => {
        articleLineArray = data.split('\n')
        addNewRow(articleLineArray, 0)
        addNewRow(articleLineArray, 4)
        addNewRow(articleLineArray, 8)
        addNewRow(articleLineArray, 12)
        addNewRow(articleLineArray, 16)
    })

}

function addNewRow(articleList, index){
    var row = document.createElement("tr")

    var IndexTD = document.createElement("td")
    IndexTD.appendChild(document.createTextNode((index / 4)+1))

    var TimestampTD = document.createElement("td")
    TimestampTD.appendChild(document.createTextNode(articleList[index+3].substr(articleList[index+3].indexOf(":") + 1)))

    var TitleTD = document.createElement("td")
    TitleTD.appendChild(document.createTextNode(articleList[index].substr(articleList[index].indexOf(":") + 1)))

    var DescriptionTD = document.createElement("td")
    DescriptionTD.appendChild(document.createTextNode(articleList[index + 1].substr(articleList[index+1].indexOf(":") + 1)))

    var ImageSourceTD = document.createElement("td")
    ImageSourceTD.appendChild(document.createTextNode(articleList[index + 2].substr(articleList[index+2].indexOf(":") + 1)))

    row.appendChild(IndexTD)
    row.appendChild(TimestampTD)
    row.appendChild(TitleTD)
    row.appendChild(DescriptionTD)
    row.appendChild(ImageSourceTD)

    table.appendChild(row)
}

fillTableFromFile()
