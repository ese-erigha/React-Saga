import React,{Fragment} from 'react';
import {Row,Col,Card} from 'react-materialize';

export const PostItem = (props)=>{

    
    return <Fragment>
            <Card className="hand list-item">
               {props.post.title && <Row>
                    <Col l={12} s={12} m={12}>
                        <div className="post-title">{props.post.title}</div>
                        <div className="post-body">{props.post.body}</div>   
                    </Col>
               </Row>}
            </Card>
           </Fragment>;
};

export default PostItem;