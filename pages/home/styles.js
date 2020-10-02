import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  movieContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  movieContainerTitle: {
    textAlign: 'center',
    marginBottom: 0
  },
  movieContainerTitleSpan: {
    fontSize: 11,
    fontWeight: 600,
  }
}))
