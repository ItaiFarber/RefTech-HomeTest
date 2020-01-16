import requests
from bs4 import BeautifulSoup
from datetime import datetime


URL = 'https://www.walla.co.il'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'}

page = requests.get(URL, headers=headers)
soup = BeautifulSoup(page.content, 'html.parser')

theArticles = soup.findAll("article", {"data-tb-region": "mainItem"} )
for article in soup.findAll("article", {"data-tb-region": "mainFeed_section_1"}):
    theArticles.append(article)

myFile = open("articlesFile.txt", "w")

def writeArticleDetailsToFile(article):
    with open("articlesFile.txt", "a", encoding="UTF-8") as myFile:
        myFile.write("Article title: " + str(article.find("a").find("h3").find("div").find("span").get_text()))
        myFile.write('\n')
        myFile.write("Article description: " + str(article.find("a").find("p").get_text()))
        myFile.write('\n')
        myFile.write("Article image source: " + findArticleImgSrc(article))
        myFile.write('\n')
        myFile.write("Timestamp: " + datetime.now().strftime("%d/%m/%Y %H:%M:%S.%f"))
        myFile.write('\n')



def findArticleImgSrc(article):
    if(article.find("a").find("div").find("ul") != None):
        return article.find("a").find("div").find("ul").find("picture").find("img")['src']
    return article.find("a").find("div").find("picture").find("img")['src']
    
    


for article in theArticles:
    writeArticleDetailsToFile(article)




