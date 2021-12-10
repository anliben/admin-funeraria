import * as React from "react";
import {
  Linking,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";

import { Text, View } from "../components/Themed";


const CemiterioItem = (props: any) => {
    return (
        
        <View style={ Styles.centeredView }>
        <View style={ Styles.cardView }>
          <Image style={ Styles.promotionImage } source={ {uri: props.data.foto} }  />
          <View style={ Styles.descriptionText }>
            <Text style={ Styles.titleText }>Nome: { props.data.nome }</Text>
            <Text style={ Styles.titleText }>Fone: { props.data.fone_i }</Text>
            <Text style={ Styles.titleText }>Email: { props.data.email }</Text>
            <Text style={ Styles.titleText }> { props.data.observacao }</Text>
            <TouchableHighlight
                style={ Styles.linkButton }
                onPress={ async () => {
                  const supported = await Linking.canOpenURL('https://www.google.com');
                  if (supported) {
                    await Linking.openURL('https://www.google.com');
                  }
                }}
              >
              <Text style={ Styles.textLinkButton }>Detalhes</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>

  );
}

const Styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: "center",
        marginTop: 30,
        marginBottom: 100,
      },
      cardView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 5,
        backgroundColor: "white",
        borderRadius: 15,
        padding: 15,
        paddingBottom: 90,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '94%',
        minHeight: 200
      },
      separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
      },
      promotionImage: {
        width: '100%',
        height: '40%'
      },
      descriptionText: {
        flex: 1
      },
      titleText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
        margin: 5
      },
      priceText: {
        color: "#e73931",
        fontWeight: "bold",
        fontSize: 16,
        margin: 5
      },
      linkButton: {
        backgroundColor: "#2196F3",
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        margin: 5
      },
      textLinkButton: {
        color: "#FFFFFF",
        textAlign: 'center'
      }
});
export default CemiterioItem