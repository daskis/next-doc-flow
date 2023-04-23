import React, {useEffect} from 'react';
import {EditComponent} from "@/components";
import {useRouter} from "next/router";
// export async function getServerSideProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch('http://10.2.0.64:8000/api/contractors/7/')
//     const info = await res.json()
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//         props: {
//             info,
//         },
//     }
// }

const Edit = ({info}) => {

    return (
        <EditComponent/>
    );
};

export default Edit;