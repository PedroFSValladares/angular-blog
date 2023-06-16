export type ApiResponse = {
    status:string
    totalResults:number
    results:News[]
    nextPage:string
}

export type News = {
    title:string
    link:string
    keywords:string[]
    creator:string|null
    video_url:string
    description:string
    content:string
    pubDate:string
    image_url:string
    source_id:string
    category:string[]
    country:string[]
    language:string
}

export type Source = {
    id:string
    name:string
    description:string | null
    category:string | null
    country:string | null
    url:string | null
    language:string | string
}