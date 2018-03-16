import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class ReactRouter extends Component {
  render () {
    return (
      <div>
        <table border="1" width="800">
          <thead>
            <tr>
              <th>标题</th>
              <th>内容</th>
              <th>其他</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>相关资料</td>
              <td>
                <a href="http://reacttraining.cn/web/example/basic">reacttraining.cn</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>demo</td>
              <td colSpan="2"><ModalGallery /></td>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}

export default ReactRouter;



class ModalSwitch extends React.Component {

  // We can pass a location to <Switch/> that will tell it to
  // ignore the router's current location and use the location
  // prop instead.
  //
  // We can also use "location state" to tell the app the user
  // wants to go to `/images/2` in a modal, rather than as the
  // main page, keeping the gallery visible behind it.
  //
  // Normally, `/images/2` wouldn't match the gallery at `/`.
  // So, to get both screens to render, we can save the old
  // location and pass it to Switch, so it will think the location
  // is still `/` even though its `/images/2`.
  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    const { location } = this.props
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    )
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path='/ReactRouter' component={Home}/>
          <Route path='/ReactRouter/gallery' component={Gallery}/>
          <Route path='/ReactRouter/img/:id' component={ImageView}/>
        </Switch>
        {isModal ? <Route path='/ReactRouter/img/:id' component={Modal} /> : null}
      </div>
    )
  }
}

const IMAGES = [
  { id: 0, title: 'Dark Orchid', color: 'DarkOrchid' },
  { id: 1, title: 'Lime Green', color: 'LimeGreen' },
  { id: 2, title: 'Tomato', color: 'Tomato' },
  { id: 3, title: 'Seven Ate Nine', color: '#789' },
  { id: 4, title: 'Crimson', color: 'Crimson' }
]

const Thumbnail = ({ color }) =>
  <div style={{
    width: 50,
    height: 50,
    background: color
  }}/>

const Image = ({ color }) =>
  <div style={{
    width: '100%',
    height: 400,
    background: color
  }}></div>

const Home = () => (
  <div>
    <Link to='/ReactRouter/gallery'>Visit the Gallery</Link>
    <h2>Featured Images</h2>
    <ul>
      <li><Link to='/ReactRouter/img/2'>Tomato</Link></li>
      <li><Link to='/ReactRouter/img/4'>Crimson</Link></li>
    </ul>
  </div>
)

const Gallery = () => (
  <div>
    {IMAGES.map(i => (
      <Link
        key={i.id}
        to={{
          pathname: `/ReactRouter/img/${i.id}`,
          // this is the trick!
          state: { modal: true }
        }}
      >
        <Thumbnail color={i.color} />
        <p>{i.title}</p>
      </Link>
    ))}
  </div>
)

const ImageView = ({ match }) => {
  const image = IMAGES[parseInt(match.params.id, 10)]
  if (!image) {
    return <div>Image not found</div>
  }

  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  )
}

const Modal = ({ match, history }) => {
  const image = IMAGES[parseInt(match.params.id, 10)]
  if (!image) {
    return null
  }
  const back = (e) => {
    e.stopPropagation()
    history.goBack()
  }
  return (
    <div
      onClick={back}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.15)'
      }}
    >
      <div className='modal' style={{
      position: 'absolute',
        background: '#fff',
        top: 25,
        left: '10%',
        right: '10%',
        padding: 15,
        border: '2px solid #444'
      }}>
        <h1>{image.title}</h1>
        <Image color={image.color} />
        <button type='button' onClick={back}>
          Close
        </button>
      </div>
    </div>
  )
}

const ModalGallery = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
)
