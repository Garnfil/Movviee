import React from 'react';
import ReactDOM from 'react-dom';

class PagesButtons extends React.Component {
  render() {
    if (!this.props.showBody) {
      return null
    }
    return(
      <div class="page-buttons">
       <button className='active' onClick={this.props.onPage.bind(this, 1)}>1</button>
       <button onClick={this.props.onPage.bind(this, 2)}>2</button>
       <button onClick={this.props.onPage.bind(this, 3)}>3</button>
       <button onClick={this.props.onPage.bind(this, 4)}>4</button>
       <button onClick={this.props.onPage.bind(this, 5)}>5</button>
       <button onClick={this.props.onPage.bind(this, 6)}>6</button>
       <button onClick={this.props.onPage.bind(this, 7)}>7</button>
       <button onClick={this.props.onPage.bind(this, 8)}>8</button>
       <button onClick={this.props.onPage.bind(this, 9)}>9</button>
       <button onClick={this.props.onPage.bind(this, 10)}>10</button>
       <button onClick={this.props.onPage.bind(this, 11)}>11</button>
       <button onClick={this.props.onPage.bind(this, 12)}>12</button>
       <button onClick={this.props.onPage.bind(this, 13)}>13</button>
       <button onClick={this.props.onPage.bind(this, 14)}>14</button>
       <button onClick={this.props.onPage.bind(this, 15)}>15</button>
       <button onClick={this.props.onPage.bind(this, 16)}>16</button>
       <button onClick={this.props.onPage.bind(this, 17)}>17</button>
       <button onClick={this.props.onPage.bind(this, 18)}>18</button>
       <button onClick={this.props.onPage.bind(this, 19)}>19</button>
       <button onClick={this.props.onPage.bind(this, 20)}>20</button>
       <button onClick={this.props.onPage.bind(this, 21)}>21</button>
       <button onClick={this.props.onPage.bind(this, 22)}>22</button>
       <button onClick={this.props.onPage.bind(this, 23)}>23</button>
       <button onClick={this.props.onPage.bind(this, 24)}>24</button>
       <button onClick={this.props.onPage.bind(this, 25)}>25</button>
       <button onClick={this.props.onPage.bind(this, 26)}>26</button>
       <button onClick={this.props.onPage.bind(this, 27)}>27</button> 
       <button onClick={this.props.onPage.bind(this, 28)}>28</button>
       <button onClick={this.props.onPage.bind(this, 29)}>29</button>
       <button onClick={this.props.onPage.bind(this, 30)}>30</button>
      </div>
    )
  }
}
export default PagesButtons