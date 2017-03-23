# react-native-star-rating-view
StarRatingView for react-native, supporting decimal fraction and sliding rating.
Inspired by [HCSStarRatingView](https://github.com/hsousa/HCSStarRatingView)

# Demo
see the [Demo](Demo/StarRatingViewDemo)

![image](Demo/StarRatingViewDemo/demo.gif)

# Install
Note: need [`react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons)

```
npm install react-native-star-rating-view --save
```
# Usage

```js

import StarRatingBar from 'react-native-star-rating-view/StarRatingBar'

...

// readOnly, allow accurate value(只读、显示小数)
<StarRatingBar
    score={2.3}
    allowsHalfStars={true}
    accurateHalfStars={true}
/>
// sliding rating, not allow accurate value(滑动打分、不允许小数)
<StarRatingBar
    readOnly={false}
    continuous={true}
    score={3.7}
    onStarValueChanged={(score) => {
        console.log('new score:' + score);
    }}
/>
// sliding rating, allow accurate value(滑动打分、精确到小数)
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

```

# License
MIT