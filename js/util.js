/*
 * Created by xinliwei on 2016-01-21 0021.
 */
//计算月还款本息的工具对象
var loanTool = {
    /*
     * 计算并返回月还款本息的方法
     * @param loanAmount            贷款本金(也就是贷了多少款，比如，70万)
     * @param months                还款月数(也就是贷款周期，如20年，则此处为240个月)
     * @param annualInterestRate    年利率(比如，6.55%，则此处传入为6.55,应除以100以后转为0.0665再进行计算)
     */
    getPaymetnsPerMonth:function(loanAmount,months, annualInterestRate){
        // 等额本息还款法计算公式：
        // -- 月还款本息=〔贷款本金×月利率×（1＋月利率）＾还款月数〕÷〔（1＋月利率）＾还款月数－1〕
        // -- 月利率=年利率÷12=0.0665÷12=0.005541667
        // -- 其中＾符号表示乘方
        var rateOfMonth = annualInterestRate/(12*100);
        // 将计算所得的月还款金额(本息)返回
        return (loanAmount * rateOfMonth * Math.pow((1+rateOfMonth),months))/(Math.pow((1+rateOfMonth),months)-1);
    }
};

// 贷款利率
var loanRate = [
    ["6.80", "6.55", "6.15", "5.90","5.65","5.4","5.15","4.90"],       // 商业贷款利率，不同日期的贷款利率
    ["4.70", "4.50", "4.25", "4.00","3.75","3.5","3.25","3.25"]        // 公积金贷款利率，不同日期的贷款利率
];
