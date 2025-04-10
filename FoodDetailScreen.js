import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const FoodImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const FoodName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FoodPrice = styled.Text`
  font-size: 20px;
  color: #888;
  margin-bottom: 20px;
`;

const Description = styled.Text`
  font-size: 16px;
  color: #555;
  margin-bottom: 30px;
`;

export default function FoodDetailScreen({ route, navigation }) {
  const { food } = route.params;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Handle adding to cart logic (e.g., update state or Redux)
    navigation.goBack(); // Go back to the previous screen after adding
  };

  return (
    <Container>
      <FoodImage source={{ uri: food.image }} />
      <FoodName>{food.name}</FoodName>
      <FoodPrice>${food.price.toFixed(2)}</FoodPrice>
      <Description>{food.description || "No description available"}</Description>
      <Button title={`Add ${quantity} to Cart`} onPress={handleAddToCart} />
    </Container>
  );
}
