//
//  ViewController.swift
//  IOSWebView
//
//  Created by NYCDOE on 12/25/19.
//  Copyright © 2019 app. All rights reserved.
//

import UIKit
import WebKit


class ViewController: UIViewController, WKUIDelegate,WKNavigationDelegate {
    var webView: WKWebView!

//    override func viewDidLoad() {
//        super.viewDidLoad()
//        // Do any additional setup after loading the view.
//    }


    override func loadView() {
        webView = WKWebView()
        webView.navigationDelegate = self
        view = webView
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        webView.uiDelegate = self
        webView.navigationDelegate = self
        // 1
//        let url = URL(string: "https://class.appedtech.com")!
//        webView.load(URLRequest(url: url))
          let url = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "www")!
          webView.loadFileURL(url, allowingReadAccessTo: url)
          let request = URLRequest(url: url)
          webView.load(request)
        
        // 2
        let refresh = UIBarButtonItem(barButtonSystemItem: .refresh, target: webView, action: #selector(webView.reload))
        toolbarItems = [refresh]
        navigationController?.isToolbarHidden = false
    }
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
    title = webView.title
    }
}

