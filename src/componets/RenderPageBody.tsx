
import React from 'react';
import {RENDER_PAGE_BODY_INFO} from './PageBodyData.js';

function RenderAllButtons(props ){
    let ReturnData = [];
    if(RENDER_PAGE_BODY_INFO[props.index].ShowBothButtons === true){
        ReturnData.push(
        <div className="PageButtonsContainer">
            <button className='PageButton BtnBlack' href={RENDER_PAGE_BODY_INFO[props.index].LeftButtonLinkSource}>{RENDER_PAGE_BODY_INFO[props.index].LeftButtonText}</button>
            <button className='PageButton BtnWhite'href={RENDER_PAGE_BODY_INFO[props.index].RightButtonLinkSource}>{RENDER_PAGE_BODY_INFO[props.index].RightButtonText}</button>
        </div>
        );
    }
    else{
        ReturnData.push(
        <div className="PageButtonsContainer">
            <button className='PageButton BtnBlack' href={RENDER_PAGE_BODY_INFO[props.index].LeftButtonLinkSource}>{RENDER_PAGE_BODY_INFO[props.index].LeftButtonText}</button>
        </div>
        );      
    }
    return ReturnData;
}
function ShowBounceArrow(props){
    let ReturnData = [];
    if(RENDER_PAGE_BODY_INFO[props.index].ShowBounceArrow === true){
        ReturnData.push(
            <a href="#ModelY">
            <div class="arrow bounce">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            </a>
        );
    }
    return ReturnData;
}

function RenderPageBody(){
    let ReturnedCode = [];
    for(let i = 0; i < RENDER_PAGE_BODY_INFO.length; i++){
        ReturnedCode.push(
            <div className='PageBody' id={RENDER_PAGE_BODY_INFO[i].ID} style={{backgroundImage: "url(" + (RENDER_PAGE_BODY_INFO[i].BackgroundImage) + ")"}}>
                <div className = "PageBodyText">
                    <h2 className="PageHeader">{RENDER_PAGE_BODY_INFO[i].BodyTitle}</h2>
                    <p>{RENDER_PAGE_BODY_INFO[i].Description}<a href={RENDER_PAGE_BODY_INFO[i].DescriptionLinkSource}>{RENDER_PAGE_BODY_INFO[i].DescriptionLinkText}</a></p>
                </div>
                <RenderAllButtons index={i}/>
                <ShowBounceArrow index={i}/>
                
            </div>
        );
    }
    return ReturnedCode;
}

export default RenderPageBody;