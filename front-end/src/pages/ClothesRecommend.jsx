import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import {
  Card, CardContent, Box, Grid, Divider,
  Typography, Button, Avatar, Table, TableCell,
  TableContainer, TableHead, TableRow, GridList, GridListTile
} from '@material-ui/core';
import { LocalShipping, FavoriteRounded } from '@material-ui/icons'
import { clothesdetailjsx } from '../css/useStyles'

export default function ClothesDetail(props) {
  const styles = clothesdetailjsx();
  const [subscribe, setSubscribe] = useState([]);

  useEffect(() => {
    const url = process.env.REACT_APP_URL + '/clothes-resv'
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.token,
      }
    };
    axios.get(url, config).then((res) => {
      console.log(res.data);
      setSubscribe(res.data);
    })
  }, [])

  useEffect(() => {
    const url = process.env.REACT_APP_URL + '/clothes-resv'
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.token,
      }
    };
    axios.get(url, config).then((res) => {
      console.log(res.data);
      setSubscribe(res.data);
    })
  }, [])

  return (
    <Card className={styles.root}>
      <Box border={2} borderRadius={5} className={styles.paper}>
        <p style={{ fontSize: 30, marginTop: 10, marginLeft: 10 }}>위시리스트</p>

        <GridList className={styles.gridList} cols={5} cellHeight={300} style={{ width: '100%' }}>
          {subscribe && (subscribe.map((item) => (
            <GridListTile key={item} height="300px">
              <img src={item} height="100%" />
            </GridListTile>
          )))}
        </GridList>
      </Box>
      <Box border={2} borderRadius={5} className={styles.paper}>
        <p style={{ fontSize: 30, marginTop: 10, marginLeft: 10 }}>이런 옷을 추천해욧!!</p>
        <GridList className={styles.gridList} cols={5} cellHeight={300} style={{ width: '100%' }}>
          {subscribe && (subscribe.map((item) => (
            <GridListTile key={item} height="300px">
              <img src={item} height="100%" />
            </GridListTile>
          )))}
        </GridList>
      </Box>
      <Box border={2} borderRadius={5} className={styles.paper}>
        <p style={{ fontSize: 30, marginTop: 10, marginLeft: 10 }}>이런 옷은 어때욧??</p>
        <GridList className={styles.gridList} cols={5} cellHeight={300} style={{ width: '100%' }}>
          {subscribe && (subscribe.map((item) => (
            <GridListTile key={item} height="300px">
              <img src={item} height="100%" />
            </GridListTile>
          )))}
        </GridList>
      </Box>
    </Card >
  );
}