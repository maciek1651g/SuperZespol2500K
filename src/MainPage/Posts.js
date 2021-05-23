import React, { Component } from "react";
import TopMainPage from "./TopMainPage";
import ListElement from "./ListElement";
import stylesGroupView from "./stylesGroupView.module.css";
import GroupViewIcons from "./GroupViewIcons";
import Message from "./Message";
import AddUserButton from "./AddUserButton";
// import * as Icon from "react-feather";
// feather.replace();
export default class Posts extends Component {
  render() {
    return (
      <>
        <TopMainPage />
        <AddUserButton />
        <p
          style={{
            fontSize: "2em",
            margin: "0",
            display: "inline-block",
          }}
        >
          {this.props.lesson}
        </p>
        <div className={stylesGroupView.dot}>
          <ListElement color="#ec524b" />
        </div>
        <p className={stylesGroupView.groupNumber}>
          Grupa {this.props.groupNumber}
        </p>
        <GroupViewIcons
          changeSubpage={this.props.changeSubpage.bind(this)}
          active="1"
        />
        <p>Posty informacyjne</p>
        <div className={stylesGroupView.postsContainer}>
          <Message
            author="Janusz Kowalski"
            date="Wtorek, 12:35"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            dolor sit placeat dolores sequi ab earum facere repellendus
            praesentium temporibus officia repellat, excepturi neque optio
            blanditiis unde officiis corporis nam sed natus deserunt velit!
            Quod excepturi repellendus reiciendis fugit quasi eos quisquam
            eius voluptas sequi aut, corrupti a illo, quia enim fugiat quidem
            recusandae impedit molestiae, tempore repellat. Fuga, officia!
            Excepturi perferendis autem fuga ipsam repellat sed. Modi, quae
            aliquam amet provident tempore ipsam veritatis totam repellat
            sequi, consequatur neque necessitatibus reiciendis officia
            molestias sint quidem autem vitae quod, hic dolorem quia! Ipsam
            dicta quibusdam ratione necessitatibus, qui sequi consectetur?"
          />
          <Message
            author="Janusz Kowalski"
            date="Wtorek, 12:35"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            ratione quisquam ducimus necessitatibus sed autem dolores,
            adipisci repudiandae vitae sapiente repellat animi distinctio
            perferendis quas dolore accusamus quae minima consectetur. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Eaque aut, rem
            nam tempore in natus, deleniti officiis placeat officia eos
            ratione, maiores modi! Perferendis eos minus fuga alias soluta
            laborum?"
          />
          <Message
            author="Janusz Kowalski"
            date="Wtorek, 12:35"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              dolor sit placeat dolores sequi ab earum facere repellendus
              praesentium temporibus officia repellat, excepturi neque optio
              blanditiis unde officiis corporis nam sed natus deserunt velit!
              Quod excepturi repellendus reiciendis fugit quasi eos quisquam"
          />
        </div>
      </>
    );
  }
}
