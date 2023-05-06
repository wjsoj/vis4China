import streamlit as st
import pandas as pd
import pandas_profiling
from streamlit_pandas_profiling import st_profile_report

st.title('Data Analyzer')

st.subheader('Input CSV')
uploaded_file = st.file_uploader("Choose a file")

def draw(df):
    st.subheader('DataFrame')
    st.write(df)
    st.subheader('Descriptive Statistics')
    st.write(df.describe(include="all"))
    st.subheader('Report')
    pr = df.profile_report(
        title="全国重点文物保护单位数据",
        variables={
            "descriptions": {
                "id": "批次+出现顺序",
                "name": "文物保护单位名称",
                "batch": "批次",
                "type": "所属文物类型",
                "address": "地址",
                "publish": "所属文物保护单位的类型",
                "age": "年代",
                "location": "经纬度"
            }
        }
    )
    st_profile_report(pr)

if uploaded_file is not None:
    df = pd.read_csv(uploaded_file)
    draw(df)
else:
    st.info('☝️ Upload a CSV file')
    st.write("OR")
    if st.button("Load file from internet"):
        df = pd.read_csv("https://raw.githubusercontent.com/wjsoj/vis4China/main/file/result-modified.csv")
        draw(df)