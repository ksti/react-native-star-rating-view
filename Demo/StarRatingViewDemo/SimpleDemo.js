/**
 * Created by GJS on 2017/3/23.
 */

// 导入所需的包
import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Platform,
    Dimensions,
    InteractionManager,
    ScrollView,
} from "react-native";

import StarRatingBar from 'react-native-star-rating-view/StarRatingBar'
import StarRatingView from 'react-native-star-rating-view'

// 该页面所需参数（可选）
const propTypes={
    // params : React.PropTypes.shape({
    //     bookCode: React.PropTypes.string,
    //     type: React.PropTypes.string,
    // }),
};

// 传入参数的默认值（可选）
const defaultProps = {
    //
};

export default class SimpleDemo extends React.Component {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    constructor(props) {
        super(props);
        this.textHeightMax = 80;
        this.state = {
            renderPlaceholderOnly: true,
            score: 0,
            evaluateTextInpuHeight: this.textHeightMax,
            evaluateText: '',
        }
    }

    /* 组件的生命周期函数 */
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({renderPlaceholderOnly: false});
        });
    }

    /* 渲染组件 */
    render() {
        return (
            <View style={styles.container}>
                {this._renderContent()}
            </View>
        );
    }

    // 渲染内容主体
    _renderContent = () => {
        if (this.state.renderPlaceholderOnly) {
            return this._renderPlaceholderView();
        }

        return (
            <View style={styles.container}>
                {this._renderStarRatingBar1()}
                {this._renderSeparatorLine()}
                {this._renderStarRatingBar2()}
                {this._renderSeparatorLine()}
                {this._renderStarRatingBar3()}
                {this._renderSeparatorLine()}
                {this._renderAaccurateStarRatingView()}
                {this._renderSeparatorLine()}
                {this._renderEvaluateTextInput()}
                {this._renderSeparatorLine()}
            </View>
        )
    }

    // 渲染占位组件
    _renderPlaceholderView = () => {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text>正在加载...</Text>
                </View>
            </View>
        );
    }

    // 渲染评分(只读、精确到小数)
    _renderStarRatingBar1 = () => {
        return (
            <View style={[styles.starRating, {marginTop: 20, alignSelf: 'flex-start', alignItems: 'center', height: 40}]}>
                <View style={{paddingRight: 10, paddingLeft: 10}}>
                    <Text style={styles.text}>
                        只读、精确到小数
                    </Text>
                </View>
                <StarRatingBar
                    score={2.3}
                    allowsHalfStars={true}
                    accurateHalfStars={true}
                />
            </View>
        );
    }

    // 渲染评分(滑动打分、不允许小数)
    _renderStarRatingBar2 = () => {
        return (
            <View style={[styles.starRating, {alignSelf: 'flex-start', alignItems: 'center', height: 40}]}>
                <View style={{paddingRight: 10, paddingLeft: 10}}>
                    <Text style={styles.text}>
                        滑动打分、不允许小数
                    </Text>
                </View>
                <StarRatingBar
                    readOnly={false}
                    continuous={true}
                    score={3.7}
                    onStarValueChanged={(score) => {
                        console.log('new score:' + score);
                    }}
                />
            </View>
        );
    }

    // 渲染评分(滑动打分、精确到小数)
    _renderStarRatingBar3 = () => {
        return (
            <View style={[styles.starRating, {alignSelf: 'flex-start', alignItems: 'center', height: 40}]}>
                <View style={{paddingRight: 10, paddingLeft: 10}}>
                    <Text style={styles.text}>
                        滑动打分、精确到小数
                    </Text>
                </View>
                <StarRatingBar
                    starStyle={{
                        width: 20,
                        height: 20,
                    }}
                    readOnly={false}
                    continuous={true}
                    score={3.7}
                    allowsHalfStars={true}
                    accurateHalfStars={true}
                    onStarValueChanged={(score) => {
                        console.log('new score:' + score);
                    }}
                />
            </View>
        );
    }

    // 渲染评分(滑动打分、精确到小数)
    _renderAaccurateStarRatingView = () => {
        return (
            <View style={[styles.starRating, styles.marginTopBottom, {alignSelf: 'flex-start', alignItems: 'center', height: 40}]}>
                <View style={{paddingRight: 10, paddingLeft: 10}}>
                    <Text style={styles.text}>
                        滑动打分、精确到小数
                    </Text>
                </View>
                <View style={{width: 30*5, overflow: 'hidden'}}>
                    <StarRatingView
                        starStyle={{
                            width: 20,
                            height: 20,
                        }}
                        readOnly={false}
                        continuous={true}
                        allowsHalfStars={true}
                        accurateHalfStars={true}
                        maximumValue={5}
                        minimumValue={0}
                        value={this.state.score}
                        onStarValueChanged={(score) => {
                            this.setState({score});
                        }}
                    >
                    </StarRatingView>
                </View>
                <Text style={{marginLeft: 10, color: '#ffb819'}}>{this.state.score}分</Text>
            </View>
        );
    }

    _renderSeparatorLine = () => {
        return (
            <View style={styles.breakLongLineItem}/>
        );
    }

    // 渲染评价内容
    _renderEvaluateTextInput = () => {
        return (
            <View style={[styles.columnContainer, styles.marginTopBottom]}>
                <View style={{paddingRight: 10, paddingLeft: 10}}>
                    <Text style={styles.text}>
                        请输入评论内容
                    </Text>
                </View>
                <TextInput
                    multiline={true}
                    autoFocus={false}
                    placeholder='请输入'
                    placeholderTextColor='#999999'
                    style={[styles.textInput, styles.marginLeftRight, {marginTop: 10, height: this.state.evaluateTextInpuHeight}]}
                    underlineColorAndroid='transparent'
                    value={this.state.evaluateText}
                    editable={true}
                    onChange={(event) => {
                        let textHeight = event.nativeEvent.contentSize.height > this.textHeightMax ? event.nativeEvent.contentSize.height : this.textHeightMax;
                        this.setState({
                            evaluateTextInpuHeight: textHeight,
                        });
                    }}
                    onChangeText={(text) => {
                        this.setState({ evaluateText: text });
                    }}
                />
            </View>
        );
    }

    // 自定义事件: 评分值改变时触发的事件
    _onStarValueChanged = (value) => {
        console.log('star value changed:' + value);
        this.setState({
            score: value,
        });
    }
}

// 页面样式
let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    columnContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start' && 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 14,
        color: '#3B3B3B',
    },
    textInput: {
        flex: 0,
        minHeight: 40,
        backgroundColor: 'white',
        padding: 0,
        fontSize: 14,
        color: '#3B3B3B',
    },
    starRating: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    marginLeftRight: {
        marginLeft: 10,
        marginRight: 10,
    },
    marginTopBottom: {
        marginTop: 10,
        marginBottom: 10,
    },
    //-------------------------分割线--------------------
    // 带边距的分割线
    breakLineItem: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#efeff4',
        height: 1
    },
    // 长分割线
    breakLongLineItem: {
        backgroundColor: '#efeff4',
        height: 1
    },
    // 高分割框
    breakBoldLineItem: {
        backgroundColor: '#efeff4',
        height: 10
    },
});
