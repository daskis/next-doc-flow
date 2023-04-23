import Head from 'next/head'
import {ATag, Btn, Htag, InputTag, Ptag} from "@/components";
import Link from "next/link";
import Profile from "@/components/Profile/Profile";
import {useEffect, useState} from "react";
export async function getServerSideProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://10.2.0.64:8000/api/contractors/3/')
    const info = await res.json()
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            info,
        },
    }
}

export default function Home() {
    return (
        <>
            <main>
                <Profile/>
            </main>
        </>
    )
}

