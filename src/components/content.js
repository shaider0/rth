import React from 'react';
import styled from 'styled-components'

const StyledContent = styled.div`
    background-color: #282c34;
    color: white;
    padding: 10px;
`

const StyledHeader = styled.h1`
    margin-bottom: 20px;
`

const StyledList = styled.ul`
    text-align: left;
    list-style: none;
    font-size: 18px;
`

const StyledListItem = styled.li`
    padding-bottom: 10px;
    padding-left: 10px;
`

const StyledLink = styled.a`
    color: #cccccc;
    text-decoration: none;
    :hover {
        color: red;
    }
`

export const Content = () => {
    return (
        <StyledContent>
            <StyledHeader>RTH Sports & Leadership</StyledHeader>
            <StyledList>
                <StyledListItem><StyledLink href="https://www.google.com">Education</StyledLink></StyledListItem>
                <StyledListItem><StyledLink href="https://www.google.com">Basketball</StyledLink></StyledListItem>
            </StyledList>
        </StyledContent>
    )
}