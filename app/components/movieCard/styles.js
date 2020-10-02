import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  movieCardPaper: {
    height: 300,
    width: 200,
    margin: 20,
    textAlign: 'center',
    borderRadius: 20,
    boxShadow: '0px 2px 5px 1px rgba(0,0,0,0.4)'
  },
  green: {
    backgroundColor: theme.cards.green
  },
  orange: {
    backgroundColor: theme.cards.orange
  },
  yellow: {
    backgroundColor: theme.cards.yellow
  },
  white: {
    backgroundColor: theme.cards.white
  },
  movieCardImgContainer: {
    height: 220,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10,
  },
  movieCardImg: {
    width: 140,
    borderRadius: 10,
  },
  movieCardTopIcons: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '4px 7px 0 7px'
  },
  movieCardBottomDetails: {
    fontSize: '12px'
  },
}))
