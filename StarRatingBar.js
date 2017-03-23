/**
 * 功能描述：评分条(支持显示小数、滑动打分)
 * 2017-3-22
 * 作者：GJS
 */

import React, {
    Component
} from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

import StarRatingView from './StarRatingView'

const propTypes = {
    style: View.propTypes.style,
    starStyle: View.propTypes.style, // 自定义星星样式
    readOnly: React.PropTypes.bool, // 是否只读
    continuous: React.PropTypes.bool, // 是否允许滑动打分
    maximumValue: React.PropTypes.number, // 最大值
    minimumValue: React.PropTypes.number, // 最小值
    value: React.PropTypes.number, // 具体数值
    valueToFix: React.PropTypes.number, // 保留几位小数
    spacing: React.PropTypes.number, // 分数
    allowsHalfStars: React.PropTypes.bool, // 是否允许半颗星
    accurateHalfStars: React.PropTypes.bool, // 是否允许精确值
    /* todo: 绘制星星图片
     starBorderColor: React.PropTypes.string, // 星星边线颜色
     starBorderWidth: React.PropTypes.number, // 星星边线宽度
     */
    emptyStarColor: React.PropTypes.string, // 空星填充色
    tintColor: React.PropTypes.string, // 着色(填充色)
    emptyStarImage: React.PropTypes.element, // 空星图片
    halfStarImage: React.PropTypes.element, // 半星图片
    filledStarImage: React.PropTypes.element, // 实星图片
    onStarValueChanged: React.PropTypes.func, // 数值改变时的回调函数

    // 额外的属性
    scoreTextStyle: React.PropTypes.object, // 自定义分数文本样式
    scoreText: React.PropTypes.string, // 分数文本
};

const defaultProps = {
    readOnly: true,
    maximumValue: 5,
    minimumValue: 0,
    value: 0,
    valueToFix: 1,
    spacing: 10,
    allowsHalfStars: false,
    accurateHalfStars: false,
    scoreTextStyle: {marginLeft: 10, color: '#ffb819'},
    scoreText: '分',
};

export default class StarRatingBar extends Component {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.store || this.props.value,
        }
    }

    componentWillReceiveProps(nextProps) {
        let value = nextProps.score || nextProps.value;
        if (value !== this.state.value) {
            this.setState({value});
        }
    }

    render() {
        const {starStyle, spacing, maximumValue, scoreTextStyle, scoreText} = this.props;
        let starWidth = 20;
        if (starStyle && starStyle.width) {
            starWidth = starStyle.width;
        }
        let starViewWidth = (starWidth + spacing) * maximumValue - spacing;
        return <View style={styles.startList}>
            <View style={{width: starViewWidth, overflow: 'hidden'}}>
                <StarRatingView
                    starStyle={this.props.starStyle}
                    readOnly={this.props.readOnly}
                    allowsHalfStars={this.props.allowsHalfStars}
                    accurateHalfStars={this.props.accurateHalfStars}
                    continuous={this.props.continuous}
                    maximumValue={this.props.maximumValue}
                    minimumValue={this.props.minimumValue}
                    spacing={this.props.spacing}
                    value={this.state.value}
                    onStarValueChanged={(changedValue) => {
                        this.setState({value: changedValue});
                        this.props.onStarValueChanged && this.props.onStarValueChanged(changedValue);
                    }}
                >
                </StarRatingView>
            </View>
            <Text style={scoreTextStyle}>{this.state.value}{scoreText}</Text>
        </View>;
    }
}

const styles = StyleSheet.create({
    startList: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        marginRight: 10
    },
});