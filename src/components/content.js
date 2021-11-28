import React from 'react';
import styled from 'styled-components'

const StyledContent = styled.div`
    color: #dddddd;
    padding: 40px 15px 0 15px;
    width: 800px;
    margin: 0 auto;

    @media(max-width: 800px) {
        width: 100%;
    }
`

const StyledHeader = styled.h2`
    text-align: left;
    margin-bottom: 20px;
`

const ListContainer = styled.div`
    border-radius: 40px;
`

const StyledList = styled.ul`
    text-align: left;
    list-style: none;
    font-size: 18px;
    box-shadow: rgba(255, 102, 3, 0.35) 0px 5px 15px;
`

const StyledListItem = styled.li`
    padding: 10px;
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
            <StyledHeader>Resources</StyledHeader>
            <ListContainer>
                <StyledList>
                    <StyledListItem><StyledLink href="https://www.google.com">Education</StyledLink></StyledListItem>
                    <StyledListItem><StyledLink href="https://www.google.com">Basketball</StyledLink></StyledListItem>
                </StyledList>
            </ListContainer>
        </StyledContent>
    )
}