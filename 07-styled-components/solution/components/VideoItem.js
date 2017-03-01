import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import numeral from 'numeral'
import { ButtonAddToCart } from './index'

const Item = styled.li`
  background-color: #fff;
  border-bottom: 1px solid #E8E8E7;
  display: flex;
  height: 82px;
  align-items: center;
  box-sizing: border-box;
  padding-right: 20px;
  &:last-child {
    border-bottom-width: 0;
  }
  @media screen and (min-width: 700px) {
    border: 0;
    height: auto;
    flex-flow: column;
    width: 23%;
    flex-shrink: 1;
    position: relative;
    padding: 150px 22px 22px;
    max-width: 188px;
    &:last-child {
      border-bottom-width: 1px;
    }
  }
`

const ItemFigure = styled.figure`
  height: 82px;
  width: 50px;
  overflow: hidden;
  margin-right: 20px;
  @media screen and (min-width: 700px) {
    height: 130px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    overflow: hidden;
    margin-right: 0;
  }
`

const ItemImage = styled.img`
  height: 100%;
  margin-left: -50%;
  @media screen and (min-width: 700px) {
    transition: transform 300ms ease;
    margin-left: initial;
    &:hover {
      transform: scale(1.1);
    }
  }
`

const ItemDetails = styled.div`
  flex-grow: 1;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  @media screen and (min-width: 700px) {
    display: flex;
    flex-flow: inherit;
    margin-bottom: 20px;
    align-items: center;
    text-align: center;
    justify-content: flex-end;
    font-size: inherit;
  }
`

const ItemPrice = styled.span`
  color: #848484;
  padding-top: 6px;
  @media screen and (min-width: 700px) {
    margin-top: 4px;
  }
`

const ItemMeta = styled.span`
  font-size: 11px;
  font-weight: normal;
  color: #ccc;
  padding-top: 6px;
  @media screen and (min-width: 700px) {
    padding-top: 10px;
  }
`

export class VideoItem extends Component {

  state = {
    inCart: false
  }

  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    photoPath: PropTypes.string,
    length: PropTypes.string,
    filesize: PropTypes.string,
    format: PropTypes.string,
    disabled: PropTypes.bool,
    updateTotal: PropTypes.func.isRequired
  }

  addToCart (inCart) {
    this.props.updateTotal(this.props.price, inCart)
  }

  render () {
    const { id, name, price, photoPath, length, filesize, format, disabled } = this.props

    return (
      <Item>
        <ItemFigure>
          <ItemImage src={ photoPath } />
        </ItemFigure>
        <ItemDetails>
          { name }
          <ItemPrice>{ numeral(price).format('$0.00') }</ItemPrice>
          <ItemMeta>{ length }<br />{ filesize } { format }</ItemMeta>
        </ItemDetails>
        <ButtonAddToCart 
          onClick={ this.addToCart.bind(this) } 
          disabled={ disabled }
        />
      </Item>
    )
  }

}