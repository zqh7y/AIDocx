import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import EditStyle from '../style/EditStyle';
import { Entypo } from '@expo/vector-icons';

const Edit = ({ setTextStyle }) => {
  const [textSize, setTextSize] = useState(14);
  const [textColor, setTextColor] = useState('#000');
  const [textAlign, setTextAlign] = useState('left'); // Default alignment set to 'left'

  const [showColorOptions, setShowColorOptions] = useState(false);

  const applyTextStyle = () => {
    setTextStyle({
      fontSize: textSize,
      color: textColor,
      textAlign,
    });
  };

  const changeTextSize = (delta) => {
    const newSize = Math.min(Math.max(textSize + delta, 8), 30);
    setTextSize(newSize);
    applyTextStyle();
  };

  const colorGrid = [
    '#000000', '#999999', '#ff7f00', '#0000ff',
    '#4b0082', '#9400d3', '#ff0000', '#ff1493',
  ];

  const handleAlignChange = (alignment) => {
    setTextAlign(alignment);
    applyTextStyle();
  };

  useEffect(() => {
    applyTextStyle(); // Apply text styles on component mount
  }, []);

  return (
    <View style={EditStyle.container}>
      <View style={EditStyle.editRow}>
        <TouchableOpacity 
          onPress={() => setShowColorOptions((prev) => !prev)} 
          style={[EditStyle.colorDisplay, { backgroundColor: textColor }]} 
        >
          <Text>{showColorOptions ? <Entypo name="cross" size={20} color="white" /> : ''}</Text>
          </TouchableOpacity>
        <View style={EditStyle.sizeControls}>
          <TouchableOpacity onPress={() => changeTextSize(-1)} style={EditStyle.sizeButton}>
            <Text style={EditStyle.sizeText}>−</Text>
          </TouchableOpacity>
          <Text>{textSize}</Text>
          <TouchableOpacity onPress={() => changeTextSize(1)} style={EditStyle.sizeButton}>
            <Text style={EditStyle.sizeText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={EditStyle.alignDisplay}>
          {textAlign === 'left' && <Image source={require('../image/left2.jpeg')} style={EditStyle.alignIcon} />}
          {textAlign === 'center' && <Image source={require('../image/center.png')} style={EditStyle.alignIcon} />}
          {textAlign === 'right' && <Image source={require('../image/right2.png')} style={EditStyle.alignIcon} />}
        </TouchableOpacity>
      </View>

      {/* Always show alignment options */}
      <View style={EditStyle.alignOptions}>
        <TouchableOpacity 
          onPress={() => handleAlignChange('left')} 
          style={[EditStyle.alignButton, textAlign === 'left' && { borderColor: '#000', borderWidth: 2 }]}
        >
          <Image source={require('../image/left2.jpeg')} style={EditStyle.alignIcon} />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => handleAlignChange('center')} 
          style={[EditStyle.alignButton, textAlign === 'center' && { borderColor: '#000', borderWidth: 2 }]}
        >
          <Image source={require('../image/center.png')} style={EditStyle.alignIcon} />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => handleAlignChange('right')} 
          style={[EditStyle.alignButton, textAlign === 'right' && { borderColor: '#000', borderWidth: 2 }]}
        >
          <Image source={require('../image/right2.png')} style={EditStyle.alignIcon} />
        </TouchableOpacity>
      </View>

      {/* Color options */}
      {showColorOptions && (
        <View style={EditStyle.colorOptions}>
          {colorGrid.map((color, index) => (
            <TouchableOpacity 
              key={index} 
              onPress={() => { 
                setTextColor(color); 
                applyTextStyle(); 
              }} 
              style={[EditStyle.colorButton, { backgroundColor: color }]} 
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default Edit;
