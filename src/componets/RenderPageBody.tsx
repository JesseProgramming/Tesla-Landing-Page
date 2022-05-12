
import React from 'react';
import {RENDER_PAGE_BODY_INFO} from './PageBodyData.js';

function RenderAllButtons(props ){
    let ReturnData = [];
    if(RENDER_PAGE_BODY_INFO[props.index].ShowBothButtons === true){
        ReturnData.push(
        <div>
            <button className='PageButton BtnBlack' href={RENDER_PAGE_BODY_INFO[props.index].LeftButtonLinkSource}>{RENDER_PAGE_BODY_INFO[props.index].LeftButtonText}</button>
            <button className='PageButton BtnWhite'href={RENDER_PAGE_BODY_INFO[props.index].RightButtonLinkSource}>{RENDER_PAGE_BODY_INFO[props.index].RightButtonText}</button>
        </div>
        );
    }
    else{
        ReturnData.push(
        <div>
            <button className='PageButton BtnBlack' href={RENDER_PAGE_BODY_INFO[props.index].LeftButtonLinkSource}>{RENDER_PAGE_BODY_INFO[props.index].LeftButtonText}</button>
        </div>
        );      
    }
    return ReturnData;
}

function RenderPageBody(){
    var hi = RENDER_PAGE_BODY_INFO[0].BodyTitle;
    console.log(hi);
    console.log(RENDER_PAGE_BODY_INFO.length);
    let ReturnedCode = [];
    for(let i = 0; i < RENDER_PAGE_BODY_INFO.length; i++){
        ReturnedCode.push(
            <div className='PageBody' style={{backgroundImage: "url(" + (RENDER_PAGE_BODY_INFO[i].BackgroundImage) + ")"}}>
                <h2 className="PageHeader">{RENDER_PAGE_BODY_INFO[i].BodyTitle}</h2>
                <p>{RENDER_PAGE_BODY_INFO[i].Description}<a href={RENDER_PAGE_BODY_INFO[i].DescriptionLinkSource}>{RENDER_PAGE_BODY_INFO[i].DescriptionLinkText}</a></p>
                <RenderAllButtons index={i}/>
                
            </div>
        );
    }
    return ReturnedCode;
}

export default RenderPageBody;