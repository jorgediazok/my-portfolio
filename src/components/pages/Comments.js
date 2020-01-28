import React, { Component } from 'react';
import Comment from './Comment';

export default class Comments extends Component {
  render() {
    return (
      <div>
        <Comment
          author="Sam"
          timeAgo="Today at 2:03 pm"
          post="Tengo unas ganas de salir de joda, quien se prende?"
        />
        <Comment
          author="Alex"
          timeAgo="Today at 1:12 pm"
          post="Alguien para ir a tomar unas birras y fumarse un churro?"
        />
        <Comment
          author="Jane"
          timeAgo="Today at 2:35 am"
          post="Necesito ir a ver la nueva de Star Wars y estoy buscando alguien que me acompañe"
        />
        <Comment
          author="Leandro"
          timeAgo="Yesterday at 3:35 pm"
          post="Yo tomo licor yo tomo cerveza y me gustan las chicas"
        />
        <Comment
          author="Romina"
          timeAgo="Yesterday at 2:14 pm"
          post="Estoy aprendiendo a usar React y es más dificil que jugar al GO chino"
        />
      </div>
    );
  }
}
