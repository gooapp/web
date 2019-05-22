import { RecommendCate, RecommendItem } from '../models/RecommendCate';
import webList from '../../public/json/webList.json';


const JsonRequestType = {
    WebSiteList: "0",
}

let _webSiteNavigationlist = null; // 网址导航
async function fillList(): Promise<[]>
{
    try
    {
        if (!_webSiteNavigationlist)
        {
            const res = await fetch("/json/webList.json");
            _webSiteNavigationlist = await res.json();
        }
    }
    catch (error)
    {
        console.log("fillList error", error);
    }

    if (!_webSiteNavigationlist)
    {
        _webSiteNavigationlist = [];
    }

    return _webSiteNavigationlist;
}

export { JsonRequestType, fillList }; 