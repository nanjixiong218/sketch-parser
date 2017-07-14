'use strict';

import {EventEmitter} from 'events';

import * as axiosUtils from './utils/axiosUtils';
import * as layerUtils from './utils/layerUtils';
import * as decodedUtils from './utils/decodeUtils';
import * as pathUtils from './utils/pathUtils';

import SymbolStore from './globals/SymbolStore';
import Color from './data/Color';
import Style from './data/Style';
import SvgStyle from './data/SvgStyle';
import TextStyle from './data/TextStyle';

class SDK extends EventEmitter{
    constructor(document) {
        super(document);        
        Object.assign(this, axiosUtils, layerUtils, decodedUtils, pathUtils);
    }

    static SymbolStore = SymbolStore
    static Color = Color;
    static Style = Style;
    static SvgStyle = SvgStyle;
    static TextStyle = TextStyle;
    
}
