import React, { Component } from 'react';

const lessons = [
  { id: 1, title: 'Lesson 1: title', description: 'Lesson 1: description' },
  { id: 2, title: 'Lesson 2: title', description: 'Lesson 2: description' },
  { id: 3, title: 'Lesson 3: title', description: 'Lesson 3: description' },
  { id: 4, title: 'Lesson 4: title', description: 'Lesson 4: description' }
]

class Lesson extends Component {
  render () {
    return (
      <div onClick={() => { console.log(`${this.props.index}-${this.props.lesson.title}`) }}>
        <h1>{this.props.lesson.title}</h1>
        <p>{this.props.lesson.description}</p>
      </div>
    );
  }
}

class LessonsList extends Component {
  render () {
    return (
      <div>
        {lessons.map((lesson, i) => <Lesson key={i} index={i} lesson={lesson} />)}
      </div>
    );
  }
}

export default LessonsList;