import React from 'react';
import CardList from "@/components/CardList/CardList";
export async function getServerSideProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://10.2.0.64:8000/api/contracts/')
    const posts = await res.json()
    // By returning { props: { posts } }, the Blog component
    console.log(posts)
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}
export interface IPosts {
    post: {
        _id: string,
        title: string,
        desc: string,
        city: string,
        created: string
        requirements: string
        spec_links: Array<string>
    }
}

// @ts-ignore
const Index = ({posts}:IPosts) => {
    return (
        <div>
            <CardList posts={posts}/>
        </div>
    );
};

export default Index;