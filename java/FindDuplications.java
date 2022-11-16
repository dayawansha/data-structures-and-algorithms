package com.example.test1;


import java.util.HashSet;
import java.util.Iterator;

public class FindDuplications {

public static void main(String[] args){

    int[] ary = new int[]{1,2,3,3,0,5,6,7,22,33,55,66,7,444,111,7};

    HashSet set = new HashSet();
    HashSet set2 = new HashSet();
//    ArrayList list = new ArrayList();

    int j= 0;
    for(int i = 0; i < ary.length; i++){
        set.add(ary[i]);
        if(set.size()+ j  < i+1){
            set2.add(ary[i]);
            j++ ;
        }
    }

    Iterator it = set2.iterator();
    while(it.hasNext()){
        System.out.println(it.next() + "");
    }

}

}
