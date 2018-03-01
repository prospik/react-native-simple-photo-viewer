import React, { Component } from 'react';
import ReactNative, { requireNativeComponent, View } from 'react-native';
import PropTypes from 'prop-types';

const resolveAssetSource = require('../react-native/Libraries/Image/resolveAssetSource');

class SimplePhotoView extends Component {
    _onDidExit() {
        if (!this.props.onDidExit) {
            return;
        }

        this.props.onDidExit();
    }

    render() {
        const { backgroundColor } = this.props;
        const source = resolveAssetSource(this.props.source) ||
            { uri: undefined,width: undefined, height: undefined, resizeMode: undefined, cache: undefined };
        let sources;
        if (Array.isArray(source)) {
            sources = source;
        } else {
            const { width, height, uri, resizeMode, cache } = source;
            sources = [source];

            if (uri === '') {
                console.warn('source.uri should not be an empty string');
            }
        }

        return (
            <View style={{ backgroundColor }}>
                <RNSimplePhotoView
                    {...this.props}
                    source={sources}
                    onDidExit={this._onDidExit.bind(this)}
                />
            </View>
        );
    }
}

SimplePhotoView.propTypes = {
    source: PropTypes.any,
    backgroundColor: PropTypes.string,
    minScaling: PropTypes.number,
    maxScaling: PropTypes.number,
    onDidExit: PropTypes.func,
    minAlpha: PropTypes.number,
    maxExitDistance: PropTypes.number,
    minExitVelocity: PropTypes.number
};

var RNSimplePhotoView = requireNativeComponent('RNSimplePhotoView', SimplePhotoView);

export default SimplePhotoView;
