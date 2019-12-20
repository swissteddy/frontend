import Images from '../image/banner2.jpg'
import { SocialSentimentDissatisfied } from 'material-ui/svg-icons'
export const styleMateri = theme => ({
//akademik
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
  cardMborder: {
   border:"5px top-solid",
   margin:'5%',
   borderColor:"error.main",
   borderRadius:10,
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
    backgroundSize:'cover'
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
  }
//end of akademik
});