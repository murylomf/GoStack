import styled from 'styled-components';

export const Loading = styled.div`
color: #FF5733 ;
font-size: 50px;
font-weight: bold;
display: flex;
justify-items: center;
align-items: center;
height: 100vh;
`;

export const Owner = styled.header`
display:flex;
flex-direction: column;
align-items: center;

a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
}

img{
    width: 120px;
     border-radius: 50%;
     margin-top: 20px;
}

h1 {
    font-size: 24px;
    margin-top:10px;
}
p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
}

`;

export const IssueList = styled.ul`
padding-top: 30px;
margin-top: 30px;
border-top: 1px solid #eee;
list-style: none;

li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
    margin-top: 10px;
}

img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
}

div{
    flex: 1;
    margin-left: 15px;
}

strong {
    font-size: 14px;
    a{
        text-decoration: none;
        color: #333;

        &:hover {
            color: #7159c1;
        }
    }

    span{
        background: #95c8;
        color: black;
        border-radius: 9px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        line-height: 15px;
        padding: 3px 4px;
        margin-left: 10px;
    }
}
p {
        margin-top: 5px;
        font-size: 13px;
        color: #999;
    }
}


`;
