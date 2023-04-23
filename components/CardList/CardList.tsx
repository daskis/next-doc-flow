import React, {useEffect} from 'react';
import {CardListProps} from "@/components/CardList/CardList.props";
import {CardItem} from "@/components";
import styles from "./CardList.module.css"
import {IPosts} from "@/pages/tenders";
// @ts-ignore
export interface IPost {
    _id: string,
    title: string,
    desc: string,
    city: string,
    created: string
    requirements: string
    spec_links: Array<string>
}
// @ts-ignore
const CardList = ({posts}) => {

    // @ts-ignore
    return (
        <div className={styles.cardList}>{posts && posts.map((post:IPost, i:number) => {
                return (
                    <CardItem key={post._id} data={post}/>
                )
            })}
        </div>
    );
};



export default CardList;