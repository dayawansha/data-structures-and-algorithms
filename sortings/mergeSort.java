package com.example.test1;

import java.util.Arrays;

public class MergeSort {

    public static void main(String[] args){

        int[] before  = new int[]{33, 67, 88, 3, 55, 9, 2};

        for(int i : before){
            System.out.println(i);
        }
        mergeSort(before) ;
        System.out.println("aaaaaaaaaa");
        for(int i : before){
            System.out.println(i);
        }

    }
    public static void mergeSort(int[] inputArray){

        if( inputArray.length < 2){
            return;
        }
        //// create sub arrays
        int inputLength = inputArray.length;
        int midSize = inputLength/2;

        int[] leftSubArray = new int[midSize];
        int[] rightSubArray = new int[inputLength- midSize];

        for(int i = 0; i < midSize; i++){
            leftSubArray[i] = inputArray[i];
        }

        for(int i = midSize ; i < inputLength ; i++){
            rightSubArray[i-midSize] = inputArray[i];
        }
        mergeSort(leftSubArray);
        mergeSort(rightSubArray);

        //// sort and mergesub arrays
       mergeAndSortSubArrays(inputArray, leftSubArray, rightSubArray);
    }

    public static void mergeAndSortSubArrays(int[] inputArray, int[]  leftArray, int[] rightArray){

        int i= 0 , j = 0 , k = 0 ;

        int leftArraySize = leftArray.length;
        int rightArraySize = rightArray.length;

        while( i < leftArraySize &&   j < rightArraySize ){
            if(leftArray[i] <= rightArray[j]){
                inputArray[k]  = leftArray[i] ;
                i++;
            }else{
                inputArray[k]  = rightArray[j] ;
                j++;
            }
            k++;
        }
        while( i < leftArraySize  ){
            inputArray[k]  = leftArray[i] ;
            i++;
            k++;
        }
        while( j < rightArraySize ){
            inputArray[k]  = rightArray[j] ;
            j++;
            k++;
        }
    }

}
