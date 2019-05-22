class RecommendCate
{
    title: string;
    items: RecommendItem[] = [];
}

class RecommendItem
{
    title: string;
    icon: string;
    intro: string;
    url: string;
}

export { RecommendCate, RecommendItem };