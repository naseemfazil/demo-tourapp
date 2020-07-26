import React,{Component} from 'react';
import {FooterLinkList,FooterSection,Footer} from 'react-mdl';
class Footerbar extends Component{
    render()
    {
        return(<div>
            <Footer  size="mini" style={{margin: "312px"}}>
    <FooterSection type="left" logo="Title">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>

        </div>)
    }
}
export default Footerbar;