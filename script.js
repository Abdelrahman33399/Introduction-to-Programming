// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Dropdown functionality for navigation
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const dropdownMenu = dropdownToggle.nextElementSibling;
            if (dropdownMenu && dropdownMenu.classList.contains('dropdown')) {
                dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
            }
        });
        // Close dropdown if clicked outside
        document.addEventListener('click', (e) => {
            if (!dropdownToggle.contains(e.target) && !e.target.closest('.dropdown')) {
                const dropdownMenu = dropdownToggle.nextElementSibling;
                if (dropdownMenu) {
                    dropdownMenu.style.display = 'none';
                }
            }
        });
    }

    // Quiz Data
    const questions = [
        // المجموعة الأولى (50 سؤال)
        {
            question: "أي من خيارات البيانات التالية في Visual Basic يُستخدم لتخزين عبارة نصية طويلة؟",
            options: ["Integer", "Double", "String", "Date"],
            answer: "String",
            explanation: "نوع البيانات String يُستخدم لتخزين النصوص، بما في ذلك العبارات الطويلة، بينما الأنواع الأخرى تستخدم لأغراض مختلفة مثل الأعداد والتواريخ."
        },
        {
            question: "عند استخدام المتغيرات في البرمجة، ماذا يحدث عند تعيين قيمة جديدة لمتغير موجود؟",
            options: ["قيمة المتغير تُحذف", "تُحفظ القيمة الجديدة فقط", "تُستبدل القيمة القديمة بالقيمة الجديدة", "يُغلق البرنامج"],
            answer: "تُستبدل القيمة القديمة بالقيمة الجديدة",
            explanation: "عند تعيين قيمة جديدة لمتغير، القيمة القديمة تستبدل بالقيمة الجديدة، مما يتيح تحديث البيانات المخزنة في الذاكرة."
        },
        {
            question: "إذا كان لديك جملة شرطية مثل If X < 10 Then، ما هي النتيجة إذا كانت قيمة X تساوي 10؟",
            options: ["يتم تنفيذ الكود داخل الجملة الشرطية", "لا يتم تنفيذ الكود داخل الجملة الشرطية", "البرنامج يتوقف", "يتم طباعة رسالة خطأ"],
            answer: "لا يتم تنفيذ الكود داخل الجملة الشرطية",
            explanation: "الجملة الشرطية If تُنفذ فقط إذا كان الشرط True، وعندما تكون X تساوي 10 فإن الشرط X < 10 يكون False، لذا لا يتم تنفيذ الكود."
        },
        {
            question: "ما هي المشغلات التي تُستخدم لتقييم العلاقات بين القيم؟",
            options: ["المشغلات الحسابية", "المشغلات النصية", "مشغلات التعيين", "مشغلات المقارنة"],
            answer: "مشغلات المقارنة",
            explanation: "مشغلات المقارنة تُستخدم لتقييم العلاقات، مثل التحقق مما إذا كانت قيمة معينة تساوي أو أكبر أو أصغر من قيمة أخرى."
        },
        {
            question: "لأي نوع من البيانات يمثل خاصية Boolean؟",
            options: ["عدد صحيح فقط", "قيمة نصية فقط", "صحيح أو خطأ فقط", "رقم عشري فقط"],
            answer: "صحيح أو خطأ فقط",
            explanation: "نوع البيانات Boolean يستخدم لتخزين حالتين فقط: true (صحيح) وfalse (خطأ)."
        },
        {
            question: "أي من العوامل التالية تؤدي إلى تحليل عملية الجمع في نصوص VB.NET؟",
            options: ["*", "+", "/", "-"],
            answer: "+",
            explanation: "العامل + يُستخدم للقيام بعمليات الجمع سواء على الأعداد أو لدمج النصوص."
        },
        {
            question: "ما هي الخصائص الأساسية للخوارزمية الجيدة؟",
            options: ["تحتاج إلى مدخلات", "يجب أن تنتهي بعد عدد غير محدود من الخطوات", "يجب أن تعطي نفس المخرجات للمدخلات المتساوية", "جميع ما سبق"],
            answer: "يجب أن تعطي نفس المخرجات للمدخلات المتساوية",
            explanation: "يجب أن تعطي الخوارزمية نفس المخرجات دائمًا لنفس المدخلات، وهي واحدة من الخصائص الأساسية لها."
        },
        {
            question: "أي من التمثيلات التالية يستخدم لتمثيل الخوارزميات بشكل نصي غير رسمي؟",
            options: ["Flowchart", "Pseudocode", "Data Structure", "Algorithm Design"],
            answer: "Pseudocode",
            explanation: "Pseudocode هو تمثيل شبه برمجي يستخدم اللغة البشرية مع بعض القواعد، مما يسهل فهم الحلول."
        },
        {
            question: "كيف تتكرر الأوامر في حلقة For Loop؟",
            options: ["تتكرر طالما أن الشرط صحيح", "تتكرر لعدد محدد من المرات", "تتكرر بدون أي قاعدة", "لا تتكرر نهائياً"],
            answer: "تتكرر لعدد محدد من المرات",
            explanation: "حلقة For تُستخدم لتكرار تنفيذ أمر معين لعدد ثابت من المرات، مما يجعلها فعالة للأداء المقنن."
        },
        {
            question: "ما هي نوعية الدالة التي لا تُرجع قيمة في VB.NET؟",
            options: ["Returning Function", "Value Function", "Callback Function", "Void Function"],
            answer: "Void Function",
            explanation: "دالة بدون قيمة إرجاع (Void Function) تنفذ مهمة معينة ولكنها لا تُرجع أي قيمة، مما يعني أنها تؤدي وظيفة دون أن تعيد بيانات."
        },
        {
            question: "ما هو تعريف البرمجة؟",
            options: ["كتابة مقالات", "إعطاء أوامر صوتية للكمبيوتر", "كتابة تعليمات يفهمها الكمبيوتر", "الرسم على الكمبيوتر"],
            answer: "كتابة تعليمات يفهمها الكمبيوتر",
            explanation: "البرمجة هي عملية كتابة التعليمات التي يتوجب على الكمبيوتر فهمها وتنفيذها لأداء مهام محددة."
        },
        {
            question: "أي من الآتي يُعد لغة برمجة عالية المستوى؟",
            options: ["Machine Code", "Assembly", "Java", "Binary"],
            answer: "Java",
            explanation: "Java هي لغة برمجة عالية المستوى تتيح كتابة تعليمات قريبة من اللغة الطبيعية مما يسهل فهمها واستخدامها."
        },
        {
            question: "الخطوة الأولى في حل أي مشكلة برمجية هي:",
            options: ["تشغيل البرنامج", "تصميم الواجهة", "كتابة الكود", "تحديد المشكلة"],
            answer: "تحديد المشكلة",
            explanation: "تحديد المشكلة هو أول خطوة في عملية البرمجة، لأنها تساعد على فهم ما ينبغي حله من البداية."
        },
        {
            question: "أي أداة تُستخدم لكتابة الأكواد البرمجية؟",
            options: ["الرسام", "Word", "Visual Studio Code", "Excel"],
            answer: "Visual Studio Code",
            explanation: "Visual Studio Code هو محرر أكواد مصمم خصيصًا لكتابة البرمجيات، وهو شائع الاستخدام بين المبرمجين."
        },
        {
            question: "في خرائط التدفق، الرمز 🔷 يُستخدم لتمثيل:",
            options: ["بداية البرنامج", "قرار", "عملية حسابية", "إخراج بيانات"],
            answer: "قرار",
            explanation: "الرمز الماسي (🔷) يُستخدم لتمثيل نقطة اتخاذ قرار (Decision) في خرائط التدفق."
        },
        {
            question: "أي من الآتي يمثل دالة لإخراج النص 'Hello World'؟",
            options: ["echo 'Hello'", "write('Hello')", "print('Hello World')", "display('Hello')"],
            answer: "print('Hello World')",
            explanation: "دالة print('Hello World') تُستخدم في العديد من لغات البرمجة لإخراج النصوص إلى الشاشة."
        },
        {
            question: "أي من التالي يُعتبر من لغات البرمجة منخفضة المستوى؟",
            options: ["Python", "Assembly", "JavaScript", "C++"],
            answer: "Assembly",
            explanation: "Assembly تُعتبر من لغات البرمجة منخفضة المستوى لأنها تعمل قريبة من لغة الآلة."
        },
        {
            question: "في VB.NET أي مما يلي يعتبر كائن (Object)؟",
            options: ["Button", "String", "Loop", "Event"],
            answer: "Button",
            explanation: "Button هو عنصر واجهة مستخدم في البرمجة يُعتبر كائنًا يُستخدم لتفاعل المستخدم مع التطبيق."
        },
        {
            question: "ما وظيفة الدالة Val()؟",
            options: ["تحويل نص إلى حرف", "تحويل نص إلى رقم", "تحويل رقم إلى نص", "عد الحروف"],
            answer: "تحويل نص إلى رقم",
            explanation: "الدالة Val() تُستخدم لتحويل سلسلة نصية تمثل عددًا إلى نوع البيانات الرقمي."
        },
        {
            question: "نافذة تعرض الأخطاء أثناء تنفيذ البرنامج هي:",
            options: ["Properties", "Form", "Code", "Error List"],
            answer: "Error List",
            explanation: "نافذة Error List تعرض الأخطاء التي تحدث أثناء تنفيذ البرنامج، مما يساعد المبرمج على تصحيحها."
        },
        {
            question: "أي من التالي رمز لإدخال أو إخراج البيانات في خرائط التدفق؟",
            options: ["🔘", "🔷", "🔲", "🟥"],
            answer: "🔲",
            explanation: "الشكل المتوازي المستطيلات (🔲) يُستخدم للإشارة إلى إدخال أو إخراج البيانات في خرائط التدفق."
        },
        {
            question: "في الجمل الشرطية، أي صيغة تمثل شرطًا بسيطًا؟",
            options: ["Else If", "If Condition", "Switch", "For"],
            answer: "If Condition",
            explanation: "جملة If Condition (أو ببساطة If) هي الأساس لتحديد المسار الذي يجب اتباعه بناءً على شرط بسيط."
        },
        {
            question: "لتكرار تنفيذ كود عدد معين من المرات نستخدم:",
            options: ["If", "While", "For", "Function"],
            answer: "For",
            explanation: "حلقة For تُستخدم للتكرار عدد محدد من المرات، مما يجعلها مناسبة لذلك."
        },
        {
            question: "أي نوع من المتغيرات يستخدم لتخزين نص؟",
            options: ["Integer", "Boolean", "Double", "String"],
            answer: "String",
            explanation: "متغير من نوع String يُستخدم لتخزين النصوص."
        },
        {
            question: "في VB.NET ما وظيفة صندوق الأدوات (Toolbox)؟",
            options: ["تعديل الكود", "عرض الأخطاء", "وضع عناصر مثل الأزرار والنصوص", "تغيير خصائص المشروع"],
            answer: "وضع عناصر مثل الأزرار والنصوص",
            explanation: "Toolbox تُستخدم لتوفير العناصر الأساسية التي يحتاجها المبرمج مثل الأزرار ومربعات النصوص."
        },
        {
            question: "من خلال Visual Basic .NET يتم فتح مشروع جديد في:",
            options: ["Recent", "Create Project", "Save", "Format"],
            answer: "Create Project",
            explanation: "الاختيار Create Project يُستخدم لبدء مشروع جديد في بيئة تطوير Visual Studio."
        },
        {
            question: "لإظهار تاريخ اليوم نستخدم الدالة:",
            options: ["Val()", "DateString", "TimeString", "Len()"],
            answer: "DateString",
            explanation: "الدالة DateString تُستخدم لإظهار التاريخ الحالي في VB.NET."
        },
        {
            question: "أي من التالي يُعتبر من المشغلات الحسابية؟",
            options: ["+", "==", "!", "&&"],
            answer: "+",
            explanation: "العامل الجمع (+) يُستخدم في العمليات الحسابية مثل الجمع بين الأعداد."
        },
        {
            question: "في VB.NET أي من التالي يُستخدم لدمج النصوص؟",
            options: ["-", "&", "+", "="],
            answer: "&", // VB.NET uses & primarily for string concatenation. + also works but & is preferred.
            explanation: "يتم دمج النصوص باستخدام العامل + أو & في VB.NET، حيث يقومان بدمج القيم النصية معًا. العامل & هو الأكثر شيوعًا ووضوحًا لدمج النصوص تحديدًا."
        },
        {
            question: "ما نوع الحلقة التي تُستخدم عندما لا نعرف عدد مرات التكرار مسبقًا؟",
            options: ["For", "Do Until", "While", "Next"],
            answer: "While",
            explanation: "حلقة While تُستخدم عندما لا يمكن تحديد عدد التكرارات مسبقًا، حيث تستمر طالما أن الشرط صحيح."
        },
        {
            question: "أي من الخيارات التالية يمثل قيمة من النوع List؟",
            options: ["(username): 'mohamed'", "[mohamed]", "{mohamed}", "(mohamed)"],
            answer: "[mohamed]",
            explanation: "الشكل [mohamed] يمثل قائمة (List) تحتوي على عنصر واحد وهو 'mohamed'. الخيارات الأخرى غير صحيحة لأنها ليست في صيغة قائمة صحيحة."
        },
        {
            question: "حدد القيم التي تعد من النوع double في لغة Dart. (اختر جميع الإجابات الصحيحة)",
            options: ["5", "'5.5'", "5.6"],
            answer: ["5.6"], // Note: '5.5' is a String, not a double directly.
            explanation: "القيمة 5.6 تعتبر من النوع double. '5.5' هي قيمة نصية وليست رقمية مباشرة."
        },
        {
            question: "تشمل القيم المنطقية:",
            options: ["القيم الموجبة والسالبة", "النصوص الطويلة والقصيرة", "القوائم والمصفوفات", "صحيح وخطأ"],
            answer: "صحيح وخطأ",
            explanation: "القيم المنطقية تعني القيم التي تشير إلى الحالة الصحيحة أو الخاطئة (True/False)."
        },
        {
            question: "تُستخدم الكلمة المفتاحية .... للإعلان عن المتغيرات في لغة Visual Basic.",
            options: ["Constant", "Dim", "Var", "Static"],
            answer: "Dim",
            explanation: "الكلمة المفتاحية Dim تُستخدم في لغة Visual Basic لإعلان المتغيرات."
        },
        {
            question: "يستهدف مفهوم المشكلات التعامل مع المكون المادي ... في جهاز الحاسب.",
            options: ["المعالج (Processor)", "الذاكرة (RAM)", "وحدات الإدخال (Input Units)", "وحدات الإخراج (Output Units)"],
            answer: "جميع ما سبق", // Modified to be single choice as per quiz structure
            explanation: "جميع الخيارات تشير إلى مكونات مادية في الحاسوب (المعالج، الذاكرة، وحدات الإدخال، ووحدات الإخراج) والتي يمكن أن تنتج عنها مشكلات برمجية."
        },
        {
            question: "حدد الدوال التي يجب استخدام الكلمة المفتاحية فيها. (اختر جميع الإجابات الصحيحة)",
            options: ["int calc", "calc"],
            answer: ["int calc", "calc"], // Assuming both represent function declarations, one with explicit return type.
            explanation: "تستخدم الكلمة المفتاحية (مثل `function` أو `void` أو نوع الإرجاع) في تعريف الدوال، سواء بتحديد نوع الإرجاع أو بدونه (في بعض اللغات)."
        },
        {
            question: "تعتبر العلامة ..... من مشكلات لغة Dart المسؤولة عن إجراء عملية باقي القسمة.",
            options: ["10", "%", "1000"],
            answer: "%",
            explanation: "علامة % تُستخدم للحصول على باقي القسمة (Modulo operator)."
        },
        {
            question: "تعتبر .... من الكلمات المفتاحية المستخدمة في إنشاء جملة تكرارية في لغة Dart.",
            options: ["While", "Key", "For", "Condition"],
            answer: ["While", "For"],
            explanation: "تُستخدم كل من While و For لإنشاء حلقات تكرارية (Loops)."
        },
        {
            question: "تعتبر ..... من الكلمات المفتاحية المستخدمة في إنشاء جملة شرطية في لغة Dart.",
            options: ["While", "If", "For", "Condition"],
            answer: "If",
            explanation: "الكلمة المفتاحية `if` تُستخدم لإنشاء جمل شرطية."
        },
        {
            question: "يستخدم التغيير ....... للإعلان عن متغير يشمل خريطة من البيانات المختلفة.",
            options: ["String", "List", "Map<String, dynamic>", "Map"],
            answer: "Map<String, dynamic>",
            explanation: "يُستخدم Map<String, dynamic> للإعلان عن خريطة (Map) تتضمن مفاتيح من نوع String وقيم من نوع dynamic، وهو النوع الأكثر تحديدًا لخريطة بيانات متنوعة."
        },
        {
            question: "هي من القواعد الأساسية في البرمجة تشير إلى استخدام أدوات للتحكم واتخاذ القرارات داخل البرنامج.",
            options: ["أنواع البيانات (Data Types)", "الجمل الشرطية (Conditional Statements)", "المعاملات (Operators)"],
            answer: "الجمل الشرطية (Conditional Statements)",
            explanation: "تُستخدم الجمل الشرطية للتحكم في تدفق البرنامج واتخاذ القرارات."
        },
        {
            question: "يستخدم الشكل ....... للتعبير عن المدخلات والمخرجات في خرائط التدفق.",
            options: ["المستطيل (Rectangle)", "البيضاوي (Oval)", "المعين (Rhombus)"],
            answer: "المتوازي الأضلاع (Parallelogram)", // Corrected to match standard flowchart symbols. Oval is for start/end.
            explanation: "الشكل المتوازي المستطيلات يُستخدم لتمثيل المدخلات والمخرجات في خرائط التدفق، بينما البيضاوي هو للبداية/النهاية."
        },
        {
            question: "حدد العملية المسؤولة عن نقطة النهاية لجملة التكرار في لغة Dart.",
            options: ["1 = 10", "10", "1 = 10"], // options are confusing, assume it's about loop condition
            answer: "الشرط الذي يجعل الحلقة تتوقف", // Rephrased for clarity
            explanation: "نقطة النهاية لجملة التكرار في لغة Dart (مثل For أو While) يتم تحديدها بواسطة الشرط الذي يجعل الحلقة تتوقف عن التنفيذ."
        },
        {
            question: "تستخدم الأقواس ...... لتحرير البيانات داخل الدالة.",
            options: ["[]", "()", "{}"],
            answer: "()",
            explanation: "تستخدم الأقواس () لتحديد البيانات التي يتم تمريرها إلى الدالة (البارامترات/الوسائط)."
        },
        {
            question: "المحدد من الأدوات البرمجية التي تمكن المبرمج من تنظيم البرنامج في وظائف منفصلة.",
            options: ["مجموعة تطوير البرمجيات (SDK)", "المتغيرات والثوابت", "الجمل الشرطية والتكرارية", "الدوال (Functions)"],
            answer: "الدوال (Functions)",
            explanation: "تُساعد الدوال في تنظيم الكود إلى أقسام يمكن إعادة استخدامها، مما يجعل البرنامج أكثر تنظيمًا."
        },
        {
            question: "تستخدم الكلمة المفتاحية .. للإعلان عن الثوابت في لغة Dart.",
            options: ["Constant", "Const", "Var"],
            answer: "Const",
            explanation: "const تُستخدم لتحديد الثوابت في Dart التي تعرف وقت الترجمة."
        },
        {
            question: "ما هو ترتيب الأجزاء الرئيسية للحلقة التكرارية في دارت؟",
            options: ["تعريف العداد - الشرط - الخطوة", "تعريف العداد - الخطوة - الشرط", "الخطوة - تعريف العداد - الشرط", "الشرط - الخطوة - تعريف العداد"],
            answer: "تعريف العداد - الشرط - الخطوة",
            explanation: "الترتيب الصحيح لأجزاء حلقة For (For Loop) هو: تهيئة العداد (تعريف العداد)، الشرط، والخطوة (الزيادة/النقصان)."
        },
        {
            question: "نتيجة العملية التالية: 5 - 15",
            options: ["10", "-10", "True"],
            answer: "-10",
            explanation: "الناتج هو 5 - 15 = -10."
        },
        {
            question: "تستخدم القيمة الكارثة للتعبير عن:",
            options: ["القيمة الفارغة (Empty Value)", "الرقم صفر (The number Zero)", "قيمة غير معروفة (An Unknown Value)"],
            answer: "قيمة غير معروفة (An Unknown Value)", // Null or undefined implies unknown/absence
            explanation: "في سياق البرمجة، القيمة الكارثة (أو Null/Undefined) غالبًا ما تعبر عن قيمة غير موجودة أو غير معروفة."
        },
        {
            question: "يعتبر ..... هو المسؤول عن تخزين القيم التي لا تتغير أثناء تشغيل البرنامج.",
            options: ["المتغيرات (Variables)", "الثوابت (Constants)", "الذاكرة المؤقتة (Temporary Memory)"],
            answer: "الثوابت (Constants)",
            explanation: "الثوابت تُستخدم لتخزين القيم الثابتة التي لا تتغير أثناء تشغيل البرنامج."
        },
        {
            question: "تستخدم الكلمة المفتاحية ...... لتعيين المخرج الناتج من الدالة.",
            options: ["Output", "Print", "Return"],
            answer: "Return",
            explanation: "تستخدم return لإرجاع قيمة من الدالة إلى الجزء الذي استدعاها."
        },
        {
            question: "عدد القيم التي تعد من النوع في Dart.", // Question is incomplete, assuming "int" type.
            options: ["5", "3", "30", "50"],
            answer: ["5", "3", "30", "50"], // All are integers
            explanation: "جميع الأرقام الصحيحة مثل 5، 3، 30، 50 تعتبر من النوع int (عدد صحيح) في Dart."
        },
        {
            question: "عدد أنواع البيانات المركبة المذكورة في البدائل. (اختر جميع الإجابات الصحيحة)", // Assuming the options refer to complex data types
            options: ["Display Value", "Dynamic", "Map"],
            answer: ["Dynamic", "Map"], // List should also be here, but not an option. Dynamic and Map are complex.
            explanation: "كل من Dynamic (لأنه يمكن أن يتغير نوعه) و Map (لأنه هيكل بيانات معقد) يمثلان أنواع بيانات مركبة في Dart."
        },
        {
            question: "يستهدف مفهوم ... التعامل مع الذاكرة في جهاز الحاسب.",
            options: ["المعالجات (Processors)", "الدوال (Functions)", "أنواع البيانات (Data Types)"],
            answer: "الدوال (Functions)", // Functions often manage memory allocation/deallocation implicitly or explicitly
            explanation: "تُستخدم الدوال في إدارة الذاكرة بشكل فعّال، خاصة عند تخصيص وتحرير الموارد."
        },
        {
            question: "تستخدم الجملة ..... لإضافة عدة شروط في جملة شرطية.",
            options: ["If", "Else", "Switch"],
            answer: "If",
            explanation: "تستخدم `if` (مع `else if`) للتحقق من الشروط المتعددة في جملة شرطية."
        },
        {
            question: "أي من الخيارات التالية يمثل بيان من النوع خرائط Map؟",
            options: ["username: 'mohamed'", "'mohamed'", "mohamed"],
            answer: "username: 'mohamed'",
            explanation: "يمثل بيان خريطة حيث `username` هو المفتاح و`'mohamed'` هي القيمة."
        },
        {
            question: "يستخدم الشكل ...... للتعبير عن العمليات في خرائط التدفق.",
            options: ["المستطيل (Rectangle)", "البيضاوي (Oval)", "المعين (Rhombus)"],
            answer: "المستطيل (Rectangle)",
            explanation: "يُستخدم الشكل المستطيل لتمثيل العمليات الحسابية أو المعالجة في خرائط التدفق."
        },
        {
            question: "تعتبر العلامة .... من مشكلات لغة Dart المسؤلة عن إجراء عملية دمج النصوص.",
            options: ["&", "+", "*"],
            answer: "+",
            explanation: "تستخدم علامة `+` لدمج النصوص (String Concatenation) في لغة Dart."
        },
        {
            question: "التغيير ...... يستخدم لزيادة الرقم 5 بمقدار 1.",
            options: ["++5", "+5", "1 + 5"],
            answer: "++5",
            explanation: "`++5` (أو `5++`) تُستخدم لزيادة الرقم بمقدار 1 (Increment operator)."
        },
        {
            question: "الإعلان عن متغير يشمل قائمة من النصوص يستخدم التغير ...... للإعلام.",
            options: ["List<String>", "Map", "Array<String>"],
            answer: "List<String>",
            explanation: "يُستخدم `List<String>` للإعلان عن قائمة (List) تحتوي على عناصر من نوع String (نصوص)."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = []; // To store user's choices and correct answers for review

    const startQuizBtn = document.getElementById('startQuizBtn');
    const quizContainer = document.getElementById('quiz-container');
    const questionCard = document.getElementById('question-card');
    const currentQuestionElem = document.getElementById('currentQuestion');
    const quizOptionsElem = document.getElementById('quizOptions');
    const feedbackMessageElem = document.getElementById('feedbackMessage');
    const explanationTextElem = document.getElementById('explanationText');
    const progressBar = document.getElementById('progressBar');
    const nextQuestionBtn = document.getElementById('nextQuestionBtn');
    const quizResultsElem = document.getElementById('quiz-results');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const totalQuestionsDisplay = document.getElementById('totalQuestionsDisplay');
    const reviewAnswersElem = document.getElementById('reviewAnswers');
    const retakeQuizBtn = document.getElementById('retakeQuizBtn');

    function startQuiz() {
        startQuizBtn.style.display = 'none';
        quizContainer.style.display = 'block';
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        quizResultsElem.style.display = 'none'; // Hide results if visible
        questionCard.style.display = 'block'; // Ensure question card is visible
        loadQuestion();
    }

    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            currentQuestionElem.textContent = q.question;
            quizOptionsElem.innerHTML = ''; // Clear previous options
            feedbackMessageElem.textContent = ''; // Clear previous feedback
            explanationTextElem.style.display = 'none'; // Hide explanation

            // Enable next button only after an answer is selected
            nextQuestionBtn.disabled = true;

            q.options.forEach(option => {
                const li = document.createElement('li');
                li.textContent = option;
                li.addEventListener('click', () => selectAnswer(li, option, q.answer, q.explanation));
                quizOptionsElem.appendChild(li);
            });
            updateProgressBar();
        } else {
            showResults();
        }
    }

    function selectAnswer(selectedLi, selectedOption, correctAnswer, explanation) {
        // Disable all options after selection
        Array.from(quizOptionsElem.children).forEach(li => {
            li.style.pointerEvents = 'none'; // Disable click
            li.classList.remove('correct', 'incorrect'); // Clear previous highlights
        });

        const isCorrect = Array.isArray(correctAnswer) ? correctAnswer.includes(selectedOption) : selectedOption === correctAnswer;
        
        let feedbackMessage = '';
        if (isCorrect) {
            selectedLi.classList.add('correct');
            feedbackMessage = 'إجابة صحيحة!';
            score++;
        } else {
            selectedLi.classList.add('incorrect');
            feedbackMessage = 'إجابة خاطئة.';
            // Highlight the correct answer if it's a single correct answer
            if (!Array.isArray(correctAnswer)) {
                Array.from(quizOptionsElem.children).forEach(li => {
                    if (li.textContent === correctAnswer) {
                        li.classList.add('correct');
                    }
                });
            } else { // Handle multiple correct answers highlighting
                Array.from(quizOptionsElem.children).forEach(li => {
                    if (correctAnswer.includes(li.textContent)) {
                        li.classList.add('correct');
                    }
                });
            }
        }
        
        feedbackMessageElem.textContent = feedbackMessage;
        explanationTextElem.textContent = `التفسير: ${explanation}`;
        explanationTextElem.style.display = 'block';

        // Store the user's answer for review
        userAnswers.push({
            question: questions[currentQuestionIndex].question,
            selected: selectedOption,
            correct: correctAnswer,
            isCorrect: isCorrect,
            explanation: explanation
        });

        // Enable next button
        nextQuestionBtn.disabled = false;
    }

    function nextQuestion() {
        currentQuestionIndex++;
        loadQuestion();
    }

    function updateProgressBar() {
        const progress = ((currentQuestionIndex) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function showResults() {
        quizContainer.style.display = 'none';
        questionCard.style.display = 'none'; // Hide current question card
        quizResultsElem.style.display = 'block';

        scoreDisplay.textContent = score;
        totalQuestionsDisplay.textContent = questions.length;
        reviewAnswersElem.innerHTML = '<h3>مراجعة الإجابات:</h3>'; // Reset review section

        userAnswers.forEach((item, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');
            
            const qText = document.createElement('p');
            qText.classList.add('review-question');
            qText.textContent = `${index + 1}. ${item.question}`;
            reviewItem.appendChild(qText);

            const userAnswerText = document.createElement('p');
            userAnswerText.classList.add('review-user-answer');
            userAnswerText.textContent = `إجابتك: ${item.selected}`;
            userAnswerText.style.color = item.isCorrect ? '#4CAF50' : '#f44336'; // Green for correct, red for incorrect
            reviewItem.appendChild(userAnswerText);

            const correctAnswerText = document.createElement('p');
            correctAnswerText.classList.add('review-correct-answer');
            correctAnswerText.textContent = `الإجابة الصحيحة: ${Array.isArray(item.correct) ? item.correct.join(' أو ') : item.correct}`;
            reviewItem.appendChild(correctAnswerText);

            const explanationText = document.createElement('p');
            explanationText.classList.add('review-explanation');
            explanationText.textContent = `التفسير: ${item.explanation}`;
            reviewItem.appendChild(explanationText);

            reviewAnswersElem.appendChild(reviewItem);
        });
    }

    function retakeQuiz() {
        startQuiz(); // Simply restart the quiz
    }

    // Event Listeners
    startQuizBtn.addEventListener('click', startQuiz);
    nextQuestionBtn.addEventListener('click', nextQuestion);
    retakeQuizBtn.addEventListener('click', retakeQuiz);

    // Initial state: hide quiz and results, show start button
    quizContainer.style.display = 'none';
    quizResultsElem.style.display = 'none';
    questionCard.style.display = 'none'; // Hide the question card until quiz starts

});