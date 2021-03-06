import React from 'react'
import { Text,TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'
import colors from '../styles/colors'

interface ButtonProps extends TouchableOpacityProps{
    title:string
}

export function Button({ title, ...rest } : ButtonProps){
    return(
        <TouchableOpacity 
            style={styles.buttom} 
            activeOpacity={0.6}
            {...rest}
            >
                <Text 
                style={styles.buttomText}
                >
                    {title}
                </Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
        buttom:{
            backgroundColor: colors.green,
            justifyContent:'center',
            alignItems:'center',
            borderRadius: 16,
            marginBottom: 10,
            height: 56,
            width: 56,
            padding: 10,
        },
        buttomText:{
            color: colors.white,
            fontSize: 24
        }
    })
