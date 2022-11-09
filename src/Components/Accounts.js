import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, Box, IconButton, Container, Grid, Card } from '@mui/material';
import BlogPostCard from './BlogPostCard';
import AccountCreateModal from './AccountCreateModal';

// redux mapping
import { useDispatch, useSelector } from "react-redux";
import { fetchAccounts, accountsSelector, addAnAccount } from "../store/slices/accountSlice";


export default function Accounts() {

    const [isLoad, setIsLoad] = useState(0);
    const handleLoad = () => {
        dispatch(fetchAccounts());
        setIsLoad(isLoad + 1);
    }

    // set up dispatch
    const dispatch = useDispatch();

    // fetch data from our store
    const { loading, error, accounts } = useSelector(accountsSelector);

    React.useEffect(() => {
        dispatch(fetchAccounts());
        console.log(isLoad);
        console.log(accounts);

    }, [isLoad]);


    return (
        <Container >
            <Grid
                container
                spacing={3}
                maxWidth="md"
                mt={10}
                mb={10}
                position="absolute"
                left="50%"
                sx={{
                    transform: "translate(-50%, 0%)"
                }}
            >

                {
                    accounts.map((post, index) => (
                        <BlogPostCard key={post.id} post={post} index={index} isLoad={() => {
                            handleLoad()
                        }} />
                    ))
                }
                <AccountCreateModal
                    reloadData={() => {
                        handleLoad();
                    }} />
            </Grid>
        </Container >
    )
}
