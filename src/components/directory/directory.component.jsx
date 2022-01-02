/* eslint-disable require-jsdoc */
import React from 'react';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
  constructor() {
    super();
    this.state={
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=808&q=80',
          id: 1,
        },
        {
          title: 'jackets',
          imageUrl: 'https://images.unsplash.com/photo-1493568000180-ca2fb70ddcba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
          id: 2,
        },
        {
          title: 'sneakers',
          imageUrl: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          id: 3,
        },
        {
          title: 'womens',
          imageUrl: 'https://images.unsplash.com/photo-1615233500570-c5d7576b4262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          id: 4,
          size: 'large',
        },
        {
          title: 'mens',
          imageUrl: 'https://media.istockphoto.com/photos/cheerful-fashionable-adult-man-in-city-setting-picture-id1310533180?b=1&k=20&m=1310533180&s=170667a&w=0&h=EdRuvIkrMifhyZJkHXf5Pk68ri44_g7OFnU8lIdbc-c=',
          id: 5,
          size: 'large',
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(
              ({title, id, imageUrl, size}) =>
                (
                  <MenuItem key={id} title={title}
                    imageUrl={imageUrl} size={size}/>
                ),
          )
        }
      </div>
    );
  }
}

export default Directory;
