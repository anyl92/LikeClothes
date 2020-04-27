import React, { PureComponent } from 'react';

const decodeTypeKorToEng = (type) => {
  switch (type) {
    case '태그':
      return 'tags';
    case '상품 이름':
      return 'name';
    case '브랜드':
      return 'brands';
    default:
      return '';
  }
}

export default class SearchInput extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.setSearchFilter({type: decodeTypeKorToEng(this.props.type), filterList: e.target.value})
  }

  render() {
    return (
        <input type="text" placeholder={this.props.type} onChange={this.handleChange} />
    );
  }
}