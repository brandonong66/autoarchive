import React from "react"
import data from "../../sampledata/testdata.json"

function pageRegex(url: string) {
    const regex = /page\d+/
    if(regex.test(url)) {
        return url.match(regex)
    }
    return ""
}

function ForumsPage() {
  return (
    <div>
      <h1>Forum Page</h1>
      {data.map((item) => (
        
        <div key={item.metadata.canonicalUrl}>
          <a href={item.metadata.canonicalUrl}>
            <h2>{item.metadata.title} {pageRegex(item.metadata.canonicalUrl)}</h2>
          </a>
        </div>
      ))}
    </div>
  )
}

export default ForumsPage
