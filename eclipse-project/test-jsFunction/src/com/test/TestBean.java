/**
 * 
 */
package com.test;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

/**
 * @author vaibhav.kapoor
 * 
 */
@ManagedBean(name = "testBean")
@SessionScoped
public class TestBean {

	public String test() {
		System.out.println("into testBean.test()");
		return null;
	}

}
