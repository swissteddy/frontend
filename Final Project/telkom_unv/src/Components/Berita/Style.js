import Images from '../image/banner2.jpg'
import { SocialSentimentDissatisfied } from 'material-ui/svg-icons'
export const styleBerita = theme => ({
//berita
wraper: {
  minHeight:"84vh",
},
bannerRoot:{
  marginTop:'3%',
  width: 'auto',
  height: 400,
},
  cardMLeft: {
    marginTop:'5%',
    marginLeft:'5%',
    width: 250,
    height:250,
  },
  cardMRight: {
    marginTop:'5%',
    marginLeft:'10%',
    width: 250,
    height:250,
  },
  cardMborder1: {
    border:"2px solid",
    borderColor:" #2e86c1",
    borderRadius:5,
   },
  cardMborder2: {
   border:"1px solid",
   margin:'5%',
   borderColor:" #F25764",
   borderRadius:10,
  },
  cardMedia: {
    width: 'auto',
    height :400,
  },
  cardMediaImage: {
    width: "100%",
    height :"100%",
  },
  cardMtgl: {
    marginTop:'5%',
    marginLeft:'10%',
    width: 120,
    height:120,
  },
  containerslide: {
    width: 'auto',
    minHeight:500,
    marginTop: '3%',
    borderRadius: 10,
    backgroundImage:`url(${Images})`,
    backgroundSize:'cover',
  },
  slickSlideImg : {
    height: '100%',
    width: '100%',
    border: '2.5 solidwhite',
    boxSizing: 'borderbox',
    borderRadius: 10,
  },
  teksKampus :{
    color:"white",
    fontSize:24,
  },
  imgkampus :{
    borderRadius: 10,
    width: 375,
    height:350,
    boxShadow: '10px 10px 5px #000',
  }
//berita
});