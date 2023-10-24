const btn = document.querySelector('.btn');
const form = document.querySelector('#form');
btn.addEventListener('click', function () {
    form.reset();
})

const getOrderText = (formVal) => {
    const text = `
    【您的订单已经生成】
        ------------------------
        奶茶口味：${formVal.type}
        数量：${formVal.num}
        杯型：${formVal.cup}
        甜度：${formVal.sugar}
        免费小料：${formVal["smallMate"] ? formVal["smallMate"] : "-"}
        加价小料：${formVal["payMate"] ? formVal["payMate"] : "-"}
        是否加冰：${formVal.isIce}
        是否去茶底：${formVal["isBottomTea"]}
        地址：${formVal.address}
        手机号：${formVal.phone}
        期待送达时间：${formVal.time}
        备注：${formVal.comment}
        支付方式：${formVal["payType"]}
    `;
    return text;
}

const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const formVals = {};
    for (var pair of formData.entries()) {
        const propName = pair[0];
        const propVal = pair[1];
        console.log(propName, propVal)

        if (formVals[propName]) {
            //提交多选时把所有多选增加到同一个key
            formVals[propName] = [propVal].concat(formVals[propName]);
        } else {
            formVals[propName] = propVal;
        }
        console.log(formVals);
    }
    console.log(formVals);
    alert(getOrderText(formVals));
}

form.addEventListener("submit", onSubmit);