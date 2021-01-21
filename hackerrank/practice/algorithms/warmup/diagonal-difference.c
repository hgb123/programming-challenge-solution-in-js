#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

int main(){
    int n,i,j,s1=0,s2=0,temp;
    scanf("%d",&n);
    int a[n][n];temp = n-1;
    for (i=0;i<n;i++){
        for (j=0;j<n;j++){
            scanf("%d",&a[i][j]);
        if (i==j) s1+=a[i][j];
        }
        s2+=a[i][temp--];
    }
    printf("%d",abs(s1-s2));
    return 0;
}
